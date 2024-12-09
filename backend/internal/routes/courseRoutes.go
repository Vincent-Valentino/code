package routes

import (
	"backend/internal/controller"
	"github.com/gorilla/mux"
)

func CourseRoutes(router *mux.Router, controller *controller.CourseController) {
	router.HandleFunc("/courses/create", controller.CreateCourse).Methods("POST")
	router.HandleFunc("/courses/{categories}", controller.GetCoursesByCategory).Methods("GET")
	router.HandleFunc("/courses/{id}", controller.GetCourse).Methods("GET")
	router.HandleFunc("/courses/{id}/{subId}", controller.GetSubCourse).Methods("GET")
}
