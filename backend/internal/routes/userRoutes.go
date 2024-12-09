package routes

import (
	"backend/internal/controller"
	"github.com/gorilla/mux"
)

func UserRoutes(router *mux.Router, controller *controller.UserController) {
	router.HandleFunc("/users/create", controller.CreateUser).Methods("POST")
	router.HandleFunc("/users", controller.GetAllUsers).Methods("GET")
	router.HandleFunc("/users/{id}", controller.GetUser).Methods("GET")
	router.HandleFunc("/users/{id", controller.EditUser).Methods("PUT")

}
