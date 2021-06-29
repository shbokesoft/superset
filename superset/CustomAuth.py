import jwt
import json
from flask import request, redirect, flash
from flask_appbuilder.security.views import AuthDBView
from flask_login import login_user
from flask_appbuilder import expose
from superset import SupersetSecurityManager


class CustomAuthDBView(AuthDBView):
    login_template = 'appbuilder/general/security/login_db.html'

    @expose('/login/', methods=['GET', 'POST'])
    def login(self):
        token = request.args.get('access_token')
        if token is not None:
            jwt_payload = jwt.decode(token, self.appbuilder.app.config.get('SECRET_KEY') ,algorithms=['HS256'])
            user_id = jwt_payload.get("identity")
            user = self.appbuilder.sm.get_user_by_id(jwt_payload.get("identity"))
            if not user:
               role_admin = self.appbuilder.sm.find_role('Admin')
               user = self.appbuilder.sm.add_user(user.username, user.username, 'aimind', user.username + "@aimind.com", role_admin, password = "aimind" + user.username)
            if user:
                login_user(user, remember=False)
                redirect_url = request.args.get('redirect')
                if not redirect_url:
                    redirect_url = self.appbuilder.get_url_for_index
                return redirect(redirect_url)
            else:
                return super(CustomAuthDBView,self).login()
        else:
            flash('Unable to auto login', 'warning')
            return super(CustomAuthDBView,self).login()

class CustomSecurityManager(SupersetSecurityManager):
    authdbview = CustomAuthDBView
