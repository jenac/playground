package com.lhmtech.poc.sso.ssopoc

import org.springframework.security.core.Authentication
import org.springframework.security.core.GrantedAuthority
import org.springframework.security.core.context.SecurityContext
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.security.core.userdetails.UserDetails

import java.util.stream.Collectors

final class SecurityHelper {

    static String getCurrentUserLogin() {
        SecurityContext securityContext = SecurityContextHolder.getContext()
        Authentication authentication = securityContext.getAuthentication()
        String userName = null
        if (authentication != null) {
            if (authentication.getPrincipal() instanceof  UserDetails) {
                UserDetails userDetails = (UserDetails) authentication.getPrincipal()
                userName = userDetails.getUsername()
            } else if (authentication.getPrincipal() instanceof String) {
                userName = (String) authentication.getPrincipal()
            }
        }
        userName
    }

    static Boolean isAuthenticated() {
        SecurityContext securityContext = SecurityContextHolder.getContext()
        Authentication authentication = securityContext.getAuthentication()
        if (authentication != null) {
            authentication.getAuthorities()
                    .stream()
                    .noneMatch({grantedAuthority -> grantedAuthority.getAuthority().equals(AuthoritiesConstants.ANONYMOUS)})
        }
        false
    }

    static Collection<String> getCurrentUserRoles() {
        SecurityContext securityContext = SecurityContextHolder.getContext()
        Authentication authentication = securityContext.getAuthentication()
        if (authentication != null) {
            authentication.getAuthorities()
                    .stream()
                    .map({it.getAuthority()})
                    .collect(Collectors.toList())
        }
        Collections.emptyList();
    }

    static Boolean isCurrentUserInRole(String authority) {
        SecurityContext securityContext = SecurityContextHolder.getContext()
        Authentication authentication = securityContext.getAuthentication()
        if (authentication != null) {
            authentication.getAuthorities()
                    .stream()
                    .anyMatch({it.getAuthority().equals(authority)})
        }
        false
    }
}
