package service

import (
	"backend/internal/model"
	"backend/internal/repository"
	"context"
)

type UserService interface {
	CreateUser(ctx context.Context, user model.User) error
	GetUser(ctx context.Context, id string) (model.User, error)
	GetAllUsers(ctx context.Context) ([]model.User, error)
	EditUser(ctx context.Context, user model.User) error
}

type userService struct {
	userRepository repository.UserRepository
}

func NewUserService(userRepository repository.UserRepository) UserService {
	return &userService{userRepository: userRepository}
}

func (s *userService) CreateUser(ctx context.Context, user model.User) error {
	return s.userRepository.CreateUser(ctx, user)
}

func (s *userService) GetAllUsers(ctx context.Context) ([]model.User, error) {
	return s.userRepository.GetAllUser(ctx)
}

func (s *userService) GetUser(ctx context.Context, id string) (model.User, error) {
	return s.userRepository.GetUser(ctx, id)
}

func (s *userService) EditUser(ctx context.Context, user model.User) error {
	return s.userRepository.EditUser(ctx, user)
}
