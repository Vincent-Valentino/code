package controller

import (
	"backend/internal/model"
	"backend/internal/service"
	"encoding/json"
	"net/http"
)

type CourseController struct {
	courseService service.CourseService
}

func NewCourseController(courseService service.CourseService) *CourseController {
	return &CourseController{courseService: courseService}
}

func (c *CourseController) CreateCourse(w http.ResponseWriter, r *http.Request) {
	var course model.Course
	if err := json.NewDecoder(r.Body).Decode(&course); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	if err := c.courseService.CreateCourse(r.Context(), course); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	w.WriteHeader(http.StatusCreated)
}

func (c *CourseController) GetCoursesByCategory(w http.ResponseWriter, r *http.Request) {
	category := r.URL.Query().Get("category")
	courses, err := c.courseService.GetCoursesByCategory(r.Context(), category)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	json.NewEncoder(w).Encode(courses)
}

func (c *CourseController) GetCourse(w http.ResponseWriter, r *http.Request) {
	id := r.URL.Query().Get("id")
	course, err := c.courseService.GetCourse(r.Context(), id)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	json.NewEncoder(w).Encode(course)
}

func (c *CourseController) GetSubCourse(w http.ResponseWriter, r *http.Request) {
	id, subId := r.URL.Query().Get("id"), r.URL.Query().Get("subId")
	subcourse, err := c.courseService.GetSubCourse(r.Context(), id, subId)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	json.NewEncoder(w).Encode(subcourse)
}
