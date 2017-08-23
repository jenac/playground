package com.lhmtech.poc.sso.ssopoc

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.beans.factory.annotation.Value
import org.springframework.context.annotation.Configuration
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter
import org.springframework.security.ldap.userdetails.LdapAuthoritiesPopulator
import org.springframework.security.web.AuthenticationEntryPoint
import org.springframework.security.web.authentication.AuthenticationFailureHandler
import org.springframework.security.web.authentication.AuthenticationSuccessHandler
import org.springframework.security.web.authentication.logout.LogoutSuccessHandler
import org.springframework.security.web.csrf.CookieCsrfTokenRepository

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true, securedEnabled = true)
class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Value('${security.ldap.url}')
    String ldapUrl;

    @Value('${security.ldap.managerDn}')
    String ldapManagerDn;

    @Value('${security.ldap.managerPassword}')
    String ldapManagerPassword;

    @Value('${security.ldap.userSearchBase}')
    String ldapUserSearchBase;

    @Value('${security.ldap.userSearchFilter}')
    String ldapUserSearchFilter;

    @Value('${security.ldap.groupSearchBase}')
    String ldapGroupSearchBase;

    @Value('${security.ldap.groupSearchFilter}')
    String ldapGroupSearchFilter;



    @Autowired
    LdapAuthoritiesPopulator ldapAuthoritiesPopulator

    @Autowired
    AuthenticationEntryPoint http401UnauthorizedEntryPoint

    @Autowired
    AuthenticationFailureHandler ajaxLoginFailHandler

    @Autowired
    AuthenticationSuccessHandler ajaxLoginSuccessHandler

    @Autowired
    LogoutSuccessHandler ajaxLogoutSuccessHandler

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .csrf().disable()
//                .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())
//                .and()
        //
                .exceptionHandling()
                .authenticationEntryPoint(http401UnauthorizedEntryPoint)
                .and()
        //
                .formLogin()
                .loginProcessingUrl("/api/login")
                .successHandler(ajaxLoginSuccessHandler)
                .failureHandler(ajaxLoginFailHandler)
                .usernameParameter("j_username")
                .passwordParameter("j_password")
                .permitAll()
                .and()
        //
                .logout()
                .logoutUrl("/api/logout")
                .logoutSuccessHandler(ajaxLogoutSuccessHandler)
                .permitAll()
                .and()
        //
                .authorizeRequests()
                .antMatchers("/api/**")
                .authenticated()
    }

    @Override
    public void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.ldapAuthentication()
                .contextSource()
                .url(ldapUrl)
                .managerDn(ldapManagerDn)
                .managerPassword(ldapManagerPassword)
                .and()
                .userSearchBase(ldapUserSearchBase)
                .userSearchFilter(ldapUserSearchFilter)
                .groupSearchBase(ldapGroupSearchBase)
                .groupSearchFilter(ldapGroupSearchFilter)
                .ldapAuthoritiesPopulator(ldapAuthoritiesPopulator);
    }



}