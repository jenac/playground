package com.lhmtech.poc.sso.ssopoc

import org.springframework.security.core.Authentication
import org.springframework.security.web.authentication.logout.LogoutSuccessHandler
import org.springframework.stereotype.Component

import javax.servlet.ServletException
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse

@Component
class AjaxLogoutSuccessHandler implements LogoutSuccessHandler {
    @Override
    void onLogoutSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
        Object principal = authentication != null ? authentication.getPrincipal() : null;
//        AUTH_LOG.debug("User Logout: {}", principal);
        response.setStatus(HttpServletResponse.SC_OK);
    }
}
