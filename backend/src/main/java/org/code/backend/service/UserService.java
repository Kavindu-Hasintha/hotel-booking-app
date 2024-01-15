package org.code.backend.service;

import lombok.RequiredArgsConstructor;
import org.code.backend.model.User;
import org.code.backend.repository.RoleRepository;
import org.code.backend.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.List;

@RequiredArgsConstructor
public class UserService implements IUserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final RoleRepository roleRepository;

    @Override
    public User registerUser(User user) {
        return null;
    }

    @Override
    public List<User> getUsers() {
        return null;
    }

    @Override
    public void deleteUser(String email) {

    }

    @Override
    public User getUser(String email) {
        return null;
    }
}
