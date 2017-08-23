package com.lhmtech.poc.sso.ssopoc

import org.springframework.security.core.Authentication
import org.springframework.security.web.authentication.AuthenticationSuccessHandler
import org.springframework.stereotype.Component

import javax.servlet.ServletException
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse

@Component
class AjaxLoginSuccessHandler implements AuthenticationSuccessHandler {
    @Override
    void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
//        AUTH_LOG.error("User Login: {}", authentication.getPrincipal());
        response.setStatus(HttpServletResponse.SC_OK);
    }
}
