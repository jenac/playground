package com.playground.saml.samlpoc;


import static org.springframework.security.extensions.saml2.config.SAMLConfigurer.saml;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.saml.userdetails.SAMLUserDetailsService;

@EnableWebSecurity
@Configuration
@EnableGlobalMethodSecurity(securedEnabled = true)
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
	@Value("${security.saml2.metadata-url}")
	String metadataUrl;

	@Autowired
	SAMLUserDetailsService samlUserDetailsService;

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http
			.authorizeRequests()
				.antMatchers("/saml/**").permitAll()
				.anyRequest().authenticated()
				.and()
			.apply(saml().userDetailsService(samlUserDetailsService))
				.serviceProvider()
					.keyStore()
						.storeFilePath("saml/keystore.jks")
						.password("secret")
						.keyname("spring")
						.keyPassword("secret")
						.and()
					.protocol("https")
					.hostname("localhost:8443")
					.basePath("/")
					.and()
				.identityProvider()
					.metadataFilePath(metadataUrl)
					.and();
	}
}