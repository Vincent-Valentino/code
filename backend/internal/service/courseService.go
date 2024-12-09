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
	GetSubCourse(ctx context.Context, id string) (model.SubCourse, error)
}

type courseService struct {
	courseRepository repository.CourseRepository
}

func NewCourseService(courseRepository repository.CourseRepository) CourseService {
	return &courseService{courseRepository: courseRepository}
}

func (s *courseService) CreateCourse(ctx context.Context, course model.Course) error {
	return s.courseRepository.CreateCourse(ctx, course)
}

func (s *courseService) GetCoursesByCategory(ctx context.Context, category string) ([]model.Course, error) {
	return s.courseRepository.GetCoursesByCategory(ctx, category)
}

func (s *courseService) GetCourse(ctx context.Context, id string) (model.Course, error) {
	return s.courseRepository.GetCourse(ctx, id)
}

func (s *courseService) GetSubCourse(ctx context.Context, id string) (model.SubCourse, error) {
	return s.courseRepository.GetSubCourse(ctx, id)
}
