package service

import (
	"backend/internal/model"
	"backend/internal/repository"
	"context"
)

type CourseService interface {
	CreateCourse(ctx context.Context, course model.Course) error
	GetCoursesByCategory(ctx context.Context, category string) ([]model.Course, error)
	GetCourse(ctx context.Context, id string) (model.Course, error)
	GetSubCourse(ctx context.Context, id string, subId string) (model.SubCourse, error)
}

type courseService struct {
	courseRepository repository.CourseRepository
}

func NewCourseService(courseRepository repository.CourseRepository) CourseService {
	return &courseService{courseRepository: courseRepository}
}

func (service *courseService) CreateCourse(ctx context.Context, course model.Course) error {
	return service.courseRepository.CreateCourse(ctx, course)
}

func (service *courseService) GetCoursesByCategory(ctx context.Context, category string) ([]model.Course, error) {
	return service.courseRepository.GetCoursesByCategory(ctx, category)
}

func (service *courseService) GetCourse(ctx context.Context, id string) (model.Course, error) {
	return service.courseRepository.GetCourse(ctx, id)
}

func (service *courseService) GetSubCourse(ctx context.Context, id string, subId string) (model.SubCourse, error) {
	return service.courseRepository.GetSubCourse(ctx, id, subId)
}
