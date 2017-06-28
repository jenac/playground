package com.playground.saml.samlpoc;

import org.opensaml.saml2.core.Attribute;
import org.opensaml.xml.XMLObject;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.saml.SAMLCredential;
import org.springframework.security.saml.userdetails.SAMLUserDetailsService;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by t169025 on 6/28/2017.
 */
@Service
public class OktaUserDetailService implements SAMLUserDetailsService{
    @Override
    public Object loadUserBySAML(SAMLCredential credential) throws UsernameNotFoundException {
        String eduPersonAffiliationAttributeName = "";
        // We need to use the "name" of the attribute to retrieve the value (not the friendly name)
        String name;
        String friendlyName;
        List<XMLObject> values;
        for (Attribute attribute : credential.getAttributes()) {
//            if ("eduPersonAffiliation".equals(attribute.getFriendlyName())) {
//                eduPersonAffiliationAttributeName = attribute.getName();
//            }
            //attribute can be get here
            name = attribute.getName();
            friendlyName = attribute.getFriendlyName();
            values = attribute.getAttributeValues();
        }
//        Person user = usersService.getUser(
//                credential.getAttribute(eduPersonAffiliationAttributeName).WHAT_TO_CALL_HERE?);
//        //return loadUserByUser(user);
        return null;
    }
}
