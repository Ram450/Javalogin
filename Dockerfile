FROM tomcat
ADD ./target/JavaServletLogin.war /usr/local/tomcat/webapps/
EXPOSE 8092
