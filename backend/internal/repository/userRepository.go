package repository

import (
	"backend/internal/model"
	"context"
	"errors"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

type UserRepository interface {
	CreateUser(ctx context.Context, user model.User) error
	GetAllUser(ctx context.Context) ([]model.User, error)
	GetUser(ctx context.Context, id string) (model.User, error)
	EditUser(ctx context.Context, user model.User) error
}

type UserManager struct {
	collection *mongo.Collection
}

func NewUserManager(collection *mongo.Collection) *UserManager {
	return &UserManager{collection: collection}
}

func (manager *UserManager) CreateUser(ctx context.Context, user model.User) error {
	_, err := manager.collection.InsertOne(ctx, user)
	return err
}

func (manager *UserManager) GetAllUser(ctx context.Context) ([]model.User, error) {
	cursor, err := manager.collection.Find(ctx, bson.M{})
	if err != nil {
		return nil, err
	}
	defer cursor.Close(ctx)

	var users []model.User
	if err = cursor.All(ctx, &users); err != nil {
		return nil, err
	}
	return users, nil
}

func (manager *UserManager) GetUser(ctx context.Context, id string) (model.User, error) {
	objectID, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return model.User{}, err
	}

	var user model.User
	err = manager.collection.FindOne(ctx, bson.M{"_id": objectID}).Decode(&user)
	if err != nil {
		if err == mongo.ErrNoDocuments {
			return model.User{}, errors.New("user not found")
		}
		return model.User{}, err
	}
	return user, nil
}

func (manager *UserManager) EditUser(ctx context.Context, user model.User) error {
	filter := bson.M{"_id": user.ID}
	update := bson.M{"$set": user}

	result, err := manager.collection.UpdateOne(ctx, filter, update)
	if err != nil {
		return err
	}
	if result.MatchedCount == 0 {
		return errors.New("user not found")
	}
	return nil
}
