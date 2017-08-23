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
class ActiveDirectoryAuthoritiesPopulator implements LdapAuthoritiesPopulator{
    Pattern groupNamePattern
    @PostConstruct
    void postConstruct() {
        groupNamePattern = Pattern.compile("something");
    }
    @Override
    Collection<? extends GrantedAuthority> getGrantedAuthorities(DirContextOperations userData, String username) {
        if (userData.attributeExists("memberOf")) {
            String[] groups = userData.getStringAttributes("memberOf");

            return Arrays.stream(groups)
                    .filter({ group -> StringUtils.contains(group, "SOME_HERE")})
                    .map({group -> groupNamePattern.matcher(group)})
                    .filter({matcher -> matcher.matches()})
                    .map({matcher -> matcher.group(1).toUpperCase()})
                    .map({role -> new SimpleGrantedAuthority("ROLE_" + role)})
                    .collect(Collectors.toSet());
        }

        return Collections.emptySet();
    }
}
