package com.lhmtech.poc.sso.ssopoc

import org.apache.commons.lang3.StringUtils
import org.springframework.ldap.core.DirContextOperations
import org.springframework.security.core.GrantedAuthority
import org.springframework.security.core.authority.SimpleGrantedAuthority
import org.springframework.security.ldap.userdetails.LdapAuthoritiesPopulator
import org.springframework.stereotype.Component

import javax.annotation.PostConstruct
import java.util.regex.Pattern
import java.util.stream.Collectors

@Component
class ActiveDirectoryAuthoritiesPopulator implements LdapAuthoritiesPopulator {
    Map<String, List<String>> roleMap = [
            :
    ]

    @PostConstruct
    void postConstruct() {
        //this could load from mongodb or some configuration database
        roleMap[AuthoritiesConstants.FINANCIAL] = ["CN=financial,OU=headquarter,DC=lhmtech,DC=io", "other financial group"]
        roleMap[AuthoritiesConstants.DEVLOPMENT] = ["CN=r&d,OU=headquarter,DC=lhmtech,DC=io", "other marketing group"]
        roleMap[AuthoritiesConstants.MARKETING] = ["CN=marketing,OU=headquarter,DC=lhmtech,DC=io"]
    }

    @Override
    Collection<? extends GrantedAuthority> getGrantedAuthorities(DirContextOperations userData, String username) {
        Set<GrantedAuthority> result = new HashSet<>()
        if (userData.attributeExists("memberOf")) {
            String[] groups = userData.getStringAttributes("memberOf");
            [AuthoritiesConstants.FINANCIAL, AuthoritiesConstants.DEVLOPMENT, AuthoritiesConstants.MARKETING].each {
                if (!roleMap[it].intersect(groups.toList()).empty) {
                    result.add(new SimpleGrantedAuthority(it))
                }
            }
        }
        result
    }
}
