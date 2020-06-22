(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"02b7":function(e,t,r){"use strict";r("7514");var n=r("4360"),a=n["a"].state;function s(e){return a.exercises.find((function(t){return t._id===e}))}function o(e,t){var r=a.workouts;return r.filter((function(r){return(null===e||i(r.created)>=i(e))&&(null===t||i(r.created)<=i(t))}))}function i(e){return new Date(e).toLocaleDateString()}t["a"]={findExerciseById:s,getWorkoutsWithinDateRange:o}},1183:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"col-12 q-pa-md row justify-center items-start q-gutter-md"},[r("q-card",{staticClass:"my-card"},[r("q-card-section",{staticClass:"col-2 bg-purple text-white"},[r("div",{staticClass:"text-h6"},[e._v(e._s(e.Label().OPTIONS))]),r("div",{staticClass:"text-subtitle2"},[e._v(" "+e._s(e.Label().CHOOSE_DATE_RANGE)+" ")])]),r("q-separator",{attrs:{dark:""}}),r("q-card-actions",{attrs:{id:"from",align:"around"}},[r("DatePicker",{on:{dateChanged:function(t){return e.setDateFrom(t)}}})],1),r("q-card-actions",{attrs:{id:"to",align:"around"}},[r("DatePicker",{on:{dateChanged:function(t){return e.setDateTo(t)}}})],1)],1),r("q-card",{staticClass:"my-card"},[r("q-card-section",[r("MuscleGroupStatsTable",{key:e.workouts,attrs:{exercises:e.filteredExercises}})],1)],1),r("q-card",{staticClass:"my-card"},[r("q-card-section",[r("ExerciseStatsTable",{key:e.workouts,attrs:{exercises:e.filteredExercises}})],1)],1),r("WorkoutFrecuency",{attrs:{dateFrom:e.dateFrom,dateTo:e.dateTo,workouts:e.workouts}})],1)},a=[],s=(r("20d6"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("Table",{attrs:{title:e.table.title(),columns:e.table.columns(),data:e.table.data}})],1)}),o=[],i=(r("7f7f"),r("cf46")),c=r("1a50"),u=function(){return c["a"].statsLabels()},l=function(){return[{name:"Name",required:!0,label:u().NAME,align:"left",field:function(e){return e.name},format:function(e){return"".concat(e)}},{name:"Times performed",required:!0,label:u().TIMES_PERFORMED,align:"center",field:function(e){return e.frecuency},format:function(e){return"".concat(e)}}]},E={name:"Exercises",components:{Table:i["a"]},props:{exercises:{type:Array,required:!0}},data:function(){return{Label:u,table:{title:function(){return u().EXERCISES_FRECUENCY},columns:l,data:this.exercises.map((function(e){return{name:e.exercise.name,frecuency:e.frecuency}}))}}}},d=E,S=r("2877"),f=Object(S["a"])(d,s,o,!1,null,null,null),m=f.exports,_=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("Table",{attrs:{title:e.table.title(),columns:e.table.columns(),data:e.table.data}})],1)},T=[],p=(r("c5f6"),r("2e37"),r("621c")),R=function(){return c["a"].statsLabels()},A=function(){return[{name:"Name",required:!0,label:R().NAME,align:"left",field:function(e){return p["a"].label(e.name)},format:function(e){return"".concat(e)}},{name:"Percentage",required:!0,label:R().PERCENTAGE,align:"center",field:function(e){return e.percentage},format:function(e){return"".concat(e)}}]},O={name:"Exercises",components:{Table:i["a"]},props:{exercises:{type:Array,required:!0}},data:function(){return{Label:R,table:{title:function(){return R().TOP_TRAINED_MUSCLES},columns:A,data:this.filterMostTrainedMuscles().map((function(e){return{name:e.name,percentage:Math.round(100*(e.percentage+Number.EPSILON))/100+"%"}}))}}},methods:{filterMostTrainedMuscles:function(){var e=[],t=0;return this.exercises.forEach((function(r){r.exercise.muscleGroups.forEach((function(r){t++;var n=e.findIndex((function(e){return e.name===r}));n>-1?e[n].quantity++:e.push({name:r,quantity:1})}))})),e.forEach((function(e){e.percentage=100*e.quantity/t})),e.sort((function(e,t){return t.percentage-e.percentage}))}}},C=O,b=Object(S["a"])(C,_,T,!1,null,null,null),g=b.exports,N=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("q-card",{staticClass:"my-card"},[r("q-card-section",{staticClass:"bg-grey-8 text-white"},[r("div",{staticClass:"text-h6"},[e._v(" "+e._s(e.Label().WORKOUT_FRECUENCY))]),r("div",{staticClass:"text-subtitle2"},[e._v(" "+e._s(e.Label().AVERAGE_IN)+" "+e._s(e.period)+" "+e._s(e.Label().DAYS))])]),r("q-card-section",[e._v("\n      "+e._s(e.Label().TOTAL_WORKOUTS_IN_RANGE)+" "+e._s(e.workouts.length)+"\n    ")]),r("q-card-section",[e._v("\n      "+e._s(e.getAverageFrecuency)+" "+e._s(e.Label().WORKOUTS_EACH)+" "+e._s(e.period)+" "+e._s(e.Label().DAYS)+"\n    ")]),r("q-separator",{attrs:{dark:""}}),r("q-card-actions",{attrs:{align:"around"}},[r("q-input",{attrs:{outlined:"",type:"number",label:e.Label().DAYS,"lazy-rules":"",rules:[function(t){return t&&t>=0||e.LocalError().INVALID_DAY_VALUE}]},model:{value:e.period,callback:function(t){e.period=t},expression:"period"}})],1)],1)},D=[],L=(r("ee1d"),r("9e27")),h=function(){return c["a"].statsLabels()},P=function(){return L["a"].statsError()},M={props:{workouts:{type:Array,required:!0},dateFrom:{type:String},dateTo:{type:String}},data:function(){return{Label:h,LocalError:P,period:7}},computed:{getAverageFrecuency:function(){if(this.workouts.length<1)return 0;var e=this.workouts.length,t=null!==this.dateFrom?new Date(this.dateFrom):new Date(this.workouts[0].created),r=null!==this.dateTo?new Date(this.dateTo):new Date(this.workouts[e-1].created),n=r.getTime()-t.getTime(),a=Math.round(n/864e5),s=this.period>a?1:a/this.period,o=Math.round(e/s);return Number.isNaN(o)?0:o}}},I=M,y=r("f09f"),U=r("a370"),x=r("eb85"),v=r("4b7e"),k=r("27f9"),w=r("eebe"),W=r.n(w),q=Object(S["a"])(I,N,D,!1,null,null,null),G=q.exports;W()(q,"components",{QCard:y["a"],QCardSection:U["a"],QSeparator:x["a"],QCardActions:v["a"],QInput:k["a"]});var F=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"q-pa-md",staticStyle:{"max-width":"300px"}},[r("q-input",{attrs:{filled:""},scopedSlots:e._u([{key:"prepend",fn:function(){return[r("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[r("q-popup-proxy",{attrs:{"transition-show":"scale","transition-hide":"scale"}},[r("q-date",{attrs:{mask:"YYYY-MM-DD HH:mm"},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1)],1)]},proxy:!0}]),model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1)},Y=[],H={name:"DatePicker",data:function(){return{date:void 0}},watch:{date:function(){this.$emit("dateChanged",this.date)}}},K=H,j=r("0016"),B=r("7cbe"),Q=r("52ee"),V=Object(S["a"])(K,F,Y,!1,null,null,null),X=V.exports;W()(V,"components",{QInput:k["a"],QIcon:j["a"],QPopupProxy:B["a"],QDate:Q["a"]});var $=r("02b7"),z=function(){return c["a"].statsLabels()},J={data:function(){return{Label:z,dateFrom:null,dateTo:null,workouts:this.$store.state.workouts}},computed:{filteredExercises:function(){return this.filterExercisesByFrecuency()}},components:{ExerciseStatsTable:m,MuscleGroupStatsTable:g,WorkoutFrecuency:G,DatePicker:X},methods:{filterExercisesByFrecuency:function(){var e=[];return this.workouts.forEach((function(t){return t.sets.forEach((function(t){var r=e.findIndex((function(e){return e.exercise._id===t.exercise_id}));if(r>-1)e[r].frecuency++;else{var n=$["a"].findExerciseById(t.exercise_id);e.push({exercise:n,frecuency:1})}}))})),e.sort((function(e,t){return t.frecuency-e.frecuency}))},setDateFrom:function(e){this.dateFrom=new Date(e).toLocaleDateString(),this.refreshWorkouts()},setDateTo:function(e){this.dateTo=new Date(e).toLocaleDateString(),this.refreshWorkouts()},refreshWorkouts:function(){this.workouts=$["a"].getWorkoutsWithinDateRange(this.dateFrom,this.dateTo)}}},Z=J,ee=Object(S["a"])(Z,n,a,!1,null,null,null);t["default"]=ee.exports;W()(ee,"components",{QCard:y["a"],QCardSection:U["a"],QSeparator:x["a"],QCardActions:v["a"]})},"1a50":function(e,t,r){"use strict";var n=r("4360"),a=function(){return n["a"].getters.language},s={en:{MESSAGE:"Your personal workout manager"},es:{MESSAGE:"Seguimiento personalizado de tu entrenamiento"}},o={en:{HOME:"Home",EXERCISES_CRUD:"Exercises CRUD",NEW_WORKOUT:"New workout",USER_WORKOUTS:"Workouts",STATS:"Stats"},es:{HOME:"Home",EXERCISES_CRUD:"ABM ejercicios",NEW_WORKOUT:"Nueva rutina",USER_WORKOUTS:"Rutinas",STATS:"Estadísticas"}},i={en:{LOGIN:"Login",SIGN_UP:"Sign up"},es:{LOGIN:"Iniciar sesión",SIGN_UP:"Registrarse"}},c={en:{NAME:"Name",PASSWORD:"Password",LOGIN:"Login",LOGOUT:"Logout"},es:{NAME:"Nombre",PASSWORD:"Contraseña",LOGIN:"Iniciar sesión",LOGOUT:"Cerrar sesión"}},u={en:{NAME:"Name",PASSWORD:"Password",CONFIRM_PASSWORD:"Confirm password",SIGN_UP:"Sign up"},es:{NAME:"Nombre",PASSWORD:"Contraseña",CONFIRM_PASSWORD:"Confirme contraseña",SIGN_UP:"Registrarse"}},l={en:{WORKOUTS:"Workouts",NEW_WORKOUT:"New workout",SELECT_EXERCISE:"Select exercise",CREATE:"Create",EXERCISE:"Exercise",REPS:"Reps",TIME:"Time",TITLE:"Title",DATE:"Date",ROUNDS:"Rounds",SETS:"Sets",ADD_SET:"Add set"},es:{WORKOUTS:"Rutinas",NEW_WORKOUT:"Nueva rutina",SELECT_EXERCISE:"Seleccione ejercicio",CREATE:"Crear",EXERCISE:"Ejercicio",REPS:"Repeticiones",TIME:"Tiempo",TITLE:"Título",DATE:"Fecha",ROUNDS:"Vueltas",SETS:"Series",ADD_SET:"Agregar serie"}},E={en:{EXERCISES_CRUD:"Exercises CRUD",TITLE:"Exercises",NAME:"Name",CREATE:"Create",MUSCLE_GROUPS:"Muscle groups"},es:{EXERCISES_CRUD:"ABM ejercicios",TITLE:"Ejercicios",NAME:"Nombre",CREATE:"Crear",MUSCLE_GROUPS:"Grupos musculares"}},d={en:{OPTIONS:"Options",CHOOSE_DATE_RANGE:"Choose a date range",EXERCISES_FRECUENCY:"Exercises frecuency",NAME:"Name",TIMES_PERFORMED:"Times performed",TOP_TRAINED_MUSCLES:"Top trained muscles",PERCENTAGE:"Percentage",WORKOUT_FRECUENCY:"Workout frecuency",AVERAGE_IN:"Average in",DAYS:"days",TOTAL_WORKOUTS_IN_RANGE:"Total workouts in range:",WORKOUTS_EACH:"workouts each"},es:{OPTIONS:"Opciones",CHOOSE_DATE_RANGE:"Elija un rango de fechas",EXERCISES_FRECUENCY:"Ranking de ejercicios",NAME:"Nombre",TIMES_PERFORMED:"Veces realizado",TOP_TRAINED_MUSCLES:"Músculos más entrenados",PERCENTAGE:"Porcentaje",WORKOUT_FRECUENCY:"Frecuencia de entrenamiento",AVERAGE_IN:"Promedio en",DAYS:"días",TOTAL_WORKOUTS_IN_RANGE:"Entrenamientos totales: ",WORKOUTS_EACH:"entrenamientos cada"}};function S(){return c[a()]}function f(){return u[a()]}function m(){return l[a()]}function _(){return E[a()]}function T(){return s[a()]}function p(){return i[a()]}function R(){return o[a()]}function A(){return d[a()]}t["a"]={mainLayoutLabels:R,homeLabels:T,initialLayoutLabels:p,exerciseCRUDLabels:_,workoutCRUDLabels:m,loginLabels:S,signupLabels:f,statsLabels:A}},"621c":function(e,t,r){"use strict";r.d(t,"b",(function(){return s}));var n=r("4360"),a=function(){return n["a"].getters.language},s=["ARMS","LEGS","BACK","SHOULDERS","CHEST","CARDIO","CORE"],o={en:{ARMS:"ARMS",LEGS:"LEGS",BACK:"BACK",SHOULDERS:"SHOULDERS",CHEST:"CHEST",CARDIO:"CARDIO",CORE:"CORE"},es:{ARMS:"BRAZOS",LEGS:"PIERNAS",BACK:"ESPALDA",SHOULDERS:"HOMBROS",CHEST:"PECHO",CARDIO:"AERÓBICO",CORE:"ABDOMINALES"}};function i(e){return o[a()][e]}t["a"]={label:i}},"9e27":function(e,t,r){"use strict";var n=r("4360"),a=function(){return n["a"].getters.language},s={en:{EMPTY_PASSWORD:"Password cannot be empty",EMPTY_NAME:"Name cannot be empty"},es:{EMPTY_PASSWORD:"La contraseña es obligatoria",EMPTY_NAME:"El nombre es obligatorio"}},o={en:{EMPTY_PASSWORD:"Password cannot be empty",EMPTY_NAME:"Name cannot be empty",PASSWORDS_DONT_MATCH:"Passwords dont match"},es:{EMPTY_PASSWORD:"La contraseña es obligatoria",EMPTY_NAME:"El nombre es obligatorio",PASSWORDS_DONT_MATCH:"Las contraseñas no coinciden"}},i={en:{NO_SETS:"You must add at least one set",INVALID_SET_FIELDS:"Every set must have an exercise and at least reps or time defined",EMPTY_TITLE:"Title cannot be empty"},es:{NO_SETS:"Agregue al menos una serie",INVALID_SET_FIELDS:"Todas las series deben tener repeticiones o tiempo",EMPTY_TITLE:"El título es obligatorio"}},c={en:{NAME:"Name",NO_MUSCLE_GROUPS:"All exercises must have at least one muscle group",EMPTY_NAME:"Name cannot be empty"},es:{NAME:"Nombre",NO_MUSCLE_GROUPS:"Todos los ejercicios deben tener al menos un grupo muscular",EMPTY_NAME:"El nombre es obligatorio"}},u={en:{INVALID_DAY_VALUE:"Only positive values"},es:{INVALID_DAY_VALUE:"Sólo valores positivos"}};function l(){return s[a()]}function E(){return o[a()]}function d(){return i[a()]}function S(){return c[a()]}function f(){return u[a()]}t["a"]={loginError:l,signupError:E,workoutCRUDError:d,exerciseCRUDError:S,statsError:f}},cf46:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"q-pa-md"},[r("q-table",{attrs:{title:e.title,data:e.data,columns:e.columns,pagination:e.pagination},scopedSlots:e._u([{key:"pagination",fn:function(t){return[t.pagesNumber>2?r("q-btn",{attrs:{icon:"first_page",color:"grey-8",round:"",dense:"",flat:"",disable:t.isFirstPage},on:{click:t.firstPage}}):e._e(),r("q-btn",{attrs:{icon:"chevron_left",color:"grey-8",round:"",dense:"",flat:"",disable:t.isFirstPage},on:{click:t.prevPage}}),r("q-btn",{attrs:{icon:"chevron_right",color:"grey-8",round:"",dense:"",flat:"",disable:t.isLastPage},on:{click:t.nextPage}}),e.pagesNumber>2?r("q-btn",{attrs:{icon:"last_page",color:"grey-8",round:"",dense:"",flat:"",disable:t.isLastPage},on:{click:t.lastPage}}):e._e()]}}])})],1)},a=[],s={props:{title:{type:String},columns:{type:Array},data:{type:Array}},data:function(){return JSON.parse(this.data),{pagination:{sortBy:"desc",descending:!1,page:2,rowsPerPage:5}}}},o=s,i=r("2877"),c=r("eaac"),u=r("9c40"),l=r("eebe"),E=r.n(l),d=Object(i["a"])(o,n,a,!1,null,null,null);t["a"]=d.exports;E()(d,"components",{QTable:c["a"],QBtn:u["a"]})}}]);