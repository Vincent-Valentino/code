package model

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
	"time"
)

type Metadata struct {
	Author 			string `bson:"author" db:"author"`
	CreatedAt   time.Time `bson:"created_at" db:"created_at"`
}

type SubCourse struct {
	ID 					primitive.ObjectID `bson:"id" db:"id"`
	Title 			string `bson:"title" db:"title"`
	Description string `bson:"description" db:"description"`
	Views				int `bson:"views" db:"views"`
	MarkdownFile string `bson:"markdown_file" db:"markdown_file"`
}

type Course struct {
	ID          string `bson:"id" db:"id"`
	Title       string `bson:"title" db:"title"`
	Description string `bson:"description" db:"description"`
	Tags        []string `bson:"tags" db:"tags"`
	Subcourses	[]SubCourse `bson:"subcourses" db:"subcourses"`
	Metadata		Metadata `bson:"metadata" db:"metadata"`
	Views				int `bson:"views" db:"views"`
}

