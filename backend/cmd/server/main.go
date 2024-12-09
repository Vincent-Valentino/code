package main

import (
	"backend/internal/controller"
	"backend/internal/repository"
	"backend/internal/routes"
	"backend/internal/service"
	"context"
	"github.com/gorilla/mux"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"log"
	"net/http"
	"time"
)

func main() {
	clientOptions := options.Client().ApplyURI("mongodb://localhost:27017")
	client, err := mongo.Connect(context.TODO(), clientOptions)
	if err != nil {
		log.Fatal(err)
	}
	defer client.Disconnect(context.TODO())

	err = client.Ping(context.TODO(), nil)
	if err != nil {
		log.Fatal(err)
	}

	userCollection := client.Database("Coder").Collection("users")
	courseCollection := client.Database("Coder").Collection("courses")

	userManager := repository.NewUserManager(userCollection)
	courseManager := repository.NewCourseManager(courseCollection)

	userController := controller.NewUserController(service.NewUserService(userManager))
	courseController := controller.NewCourseController(service.NewCourseService(courseManager))

	router := mux.NewRouter()
	routes.UserRoutes(router, userController)
	routes.CourseRoutes(router, courseController)

	srv := &http.Server{
		Handler:      router,
		Addr:         "0.0.0.0:8080",
		WriteTimeout: 15 * time.Second,
		ReadTimeout:  15 * time.Second,
	}

	log.Println("Server is running on port 8080")
	if err := srv.ListenAndServe(); err != nil {
		log.Fatal(err)
	}
}
