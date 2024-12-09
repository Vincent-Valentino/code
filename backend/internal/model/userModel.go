package model

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
	"time"
)

type User struct {
	ID           primitive.ObjectID    `bson:"id" db:"id"`
	Name         string    `bson:"name" db:"name"`
	Email        string    `bson:"email" db:"email"`
	HashPassword string    `bson:"-" db:"hash_password"`
	CreatedAt    time.Time `bson:"created_at" db:"created_at"`
	BirthDate    time.Time `bson:"birth_date" db:"birth_date"`
	Country      string    `bson:"country" db:"country"`
	Job          string    `bson:"job" db:"job"`
	Avatar       string    `bson:"avatar" db:"avatar"`
	Subscription string    `bson:"subscription" db:"subscription"`
}