(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"1a50":function(e,n,t){"use strict";var r=t("4360"),a=function(){return r["a"].getters.language},s={en:{MESSAGE:"Your personal workout manager"},es:{MESSAGE:"Seguimiento personalizado de tu entrenamiento"}},o={en:{HOME:"Home",EXERCISES_CRUD:"Exercises CRUD",NEW_WORKOUT:"New workout",USER_WORKOUTS:"Workouts",STATS:"Stats"},es:{HOME:"Home",EXERCISES_CRUD:"ABM ejercicios",NEW_WORKOUT:"Nueva rutina",USER_WORKOUTS:"Rutinas",STATS:"Estadísticas"}},i={en:{LOGIN:"Login",SIGN_UP:"Sign up"},es:{LOGIN:"Iniciar sesión",SIGN_UP:"Registrarse"}},E={en:{NAME:"Name",PASSWORD:"Password",LOGIN:"Login",LOGOUT:"Logout"},es:{NAME:"Nombre",PASSWORD:"Contraseña",LOGIN:"Iniciar sesión",LOGOUT:"Cerrar sesión"}},u={en:{NAME:"Name",PASSWORD:"Password",CONFIRM_PASSWORD:"Confirm password",SIGN_UP:"Sign up"},es:{NAME:"Nombre",PASSWORD:"Contraseña",CONFIRM_PASSWORD:"Confirme contraseña",SIGN_UP:"Registrarse"}},c={en:{WORKOUTS:"Workouts",NEW_WORKOUT:"New workout",SELECT_EXERCISE:"Select exercise",CREATE:"Create",EXERCISE:"Exercise",REPS:"Reps",TIME:"Time",TITLE:"Title",DATE:"Date",ROUNDS:"Rounds",SETS:"Sets",ADD_SET:"Add set"},es:{WORKOUTS:"Rutinas",NEW_WORKOUT:"Nueva rutina",SELECT_EXERCISE:"Seleccione ejercicio",CREATE:"Crear",EXERCISE:"Ejercicio",REPS:"Repeticiones",TIME:"Tiempo",TITLE:"Título",DATE:"Fecha",ROUNDS:"Vueltas",SETS:"Series",ADD_SET:"Agregar serie"}},l={en:{EXERCISES_CRUD:"Exercises CRUD",TITLE:"Exercises",NAME:"Name",CREATE:"Create",MUSCLE_GROUPS:"Muscle groups",CANCEL:"Cancel",SAVE:"Save",DELETE:"Delete"},es:{EXERCISES_CRUD:"ABM ejercicios",TITLE:"Ejercicios",NAME:"Nombre",CREATE:"Crear",MUSCLE_GROUPS:"Grupos musculares",CANCEL:"Cancelar",SAVE:"Guardar",DELETE:"Eliminar"}},S={en:{OPTIONS:"Options",CHOOSE_DATE_RANGE:"Choose a date range",EXERCISES_FRECUENCY:"Exercises frecuency",NAME:"Name",TIMES_PERFORMED:"Times performed",TOP_TRAINED_MUSCLES:"Top trained muscles",PERCENTAGE:"Percentage",WORKOUT_FRECUENCY:"Workout frecuency",AVERAGE_IN:"Average in",DAYS:"days",TOTAL_WORKOUTS_IN_RANGE:"Total workouts in range:",WORKOUTS_EACH:"workouts each"},es:{OPTIONS:"Opciones",CHOOSE_DATE_RANGE:"Elija un rango de fechas",EXERCISES_FRECUENCY:"Ranking de ejercicios",NAME:"Nombre",TIMES_PERFORMED:"Veces realizado",TOP_TRAINED_MUSCLES:"Músculos más entrenados",PERCENTAGE:"Porcentaje",WORKOUT_FRECUENCY:"Frecuencia de entrenamiento",AVERAGE_IN:"Promedio en",DAYS:"días",TOTAL_WORKOUTS_IN_RANGE:"Entrenamientos totales: ",WORKOUTS_EACH:"entrenamientos cada"}};function R(){return E[a()]}function T(){return u[a()]}function O(){return c[a()]}function C(){return l[a()]}function N(){return s[a()]}function A(){return i[a()]}function _(){return o[a()]}function g(){return S[a()]}n["a"]={mainLayoutLabels:_,homeLabels:N,initialLayoutLabels:A,exerciseCRUDLabels:C,workoutCRUDLabels:O,loginLabels:R,signupLabels:T,statsLabels:g}},"747c":function(e,n,t){"use strict";t.r(n);var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("q-layout",{attrs:{view:"hHh Lpr fFf"}},[t("q-header",{attrs:{elevated:""}},[t("q-toolbar",[t("q-toolbar-title",{staticClass:"wo-white-title"},[e._v("\n        MY WORKOUTS\n      ")]),t("LanguageToggler"),t("div",{staticClass:"q-pa-md q-gutter-sm wo-button"},[t("q-btn",{attrs:{color:"purple",label:e.Label().LOGIN,to:e.login.link}}),t("q-btn",{attrs:{color:"purple",label:e.Label().SIGN_UP,to:e.signup.link}})],1)],1)],1),t("q-page-container",[t("router-view")],1)],1)},a=[],s=(t("7f7f"),t("fa63")),o=t("1a50"),i=function(){return o["a"].initialLayoutLabels()},E={name:"MainLayout",components:{LanguageToggler:s["a"]},methods:{getLinks:function(){var e=this;return this.essentialLinks.filter((function(n){return(!n.userOnly||e.userLoged())&&(!n.adminOnly||e.userIsAdmin())}))},userName:function(){return this.user().name},userIsAdmin:function(){return 0===this.user().rol},user:function(){return this.$store.state.user},userLoged:function(){return""!==this.user()._id}},data:function(){return{Label:i,login:{title:"Login",link:"/"},signup:{title:"Signup",link:"signup"}}}},u=E,c=t("2877"),l=t("4d5a"),S=t("e359"),R=t("65c6"),T=t("6ac5"),O=t("9c40"),C=t("09e3"),N=t("eebe"),A=t.n(N),_=Object(c["a"])(u,r,a,!1,null,null,null);n["default"]=_.exports;A()(_,"components",{QLayout:l["a"],QHeader:S["a"],QToolbar:R["a"],QToolbarTitle:T["a"],QBtn:O["a"],QPageContainer:C["a"]})},fa63:function(e,n,t){"use strict";var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("q-toggle",{attrs:{color:"white",label:"EN/ES"},model:{value:e.checked,callback:function(n){e.checked=n},expression:"checked"}})},a=[],s=(t("c5f6"),t("20d6"),["en","es"]),o={data:function(){var e=this;return{checked:Boolean(s.findIndex((function(n){return n===e.$store.state.language})))}},watch:{checked:function(){this.$store.state.language=s[Number(this.checked)]}}},i=o,E=t("2877"),u=t("9564"),c=t("eebe"),l=t.n(c),S=Object(E["a"])(i,r,a,!1,null,null,null);n["a"]=S.exports;l()(S,"components",{QToggle:u["a"]})}}]);