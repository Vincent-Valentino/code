package repository

import (
	"backend/internal/model"
	"context"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

type CourseRepository interface {
	CreateCourse(ctx context.Context, course model.Course) error
	GetCoursesByCategory(ctx context.Context, category string) ([]model.Course, error)
	GetCourse(ctx context.Context, id string) (model.Course, error)
	GetSubCourse(ctx context.Context, id string, subId string) (model.SubCourse, error)
}

type CourseManager struct {
	collection *mongo.Collection
}

func NewCourseManager(collection *mongo.Collection) *CourseManager {
	return &CourseManager{collection: collection}
}

func (manager *CourseManager) CreateCourse(ctx context.Context, course model.Course) error {
	_, err := manager.collection.InsertOne(ctx, course)
	return err
}

func (manager *CourseManager) GetCoursesByCategory(ctx context.Context, category string) ([]model.Course, error) {
	filter := bson.M{"category": category}
	cursor, err := manager.collection.Find(ctx, filter)
	if err != nil {
		return nil, err
	}
	defer cursor.Close(ctx)
	var courses []model.Course
	if err = cursor.All(ctx, &courses); err != nil {
		return nil, err
	}
	return courses, nil
}

func (manager *CourseManager) GetCourse(ctx context.Context, id string) (model.Course, error) {
	filter := bson.M{"_id": id}
	var course model.Course
	err := manager.collection.FindOne(ctx, filter).Decode(&course)
	if err != nil {
		return model.Course{}, err
	}
	return course, nil
}

func (manager *CourseManager) GetSubCourse(ctx context.Context, id string, subId string) (model.SubCourse, error) {
	course, err := manager.GetCourse(ctx, id)
	if err != nil {
		return model.SubCourse{}, err
	}

	subObjectID, err := primitive.ObjectIDFromHex(subId)
	if err != nil {
		return model.SubCourse{}, err
	}

	for _, subcourse := range course.Subcourses { // Corrected field name
		if subcourse.ID == subObjectID { // Corrected ID comparison
			return subcourse, nil
		}
	}

	return model.SubCourse{}, mongo.ErrNoDocuments
}
