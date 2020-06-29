(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"1a50":function(e,t,n){"use strict";var r=n("4360"),a=function(){return r["a"].getters.language},s={en:{MESSAGE:"Your personal workout manager"},es:{MESSAGE:"Seguimiento personalizado de tu entrenamiento"}},i={en:{HOME:"Home",EXERCISES_CRUD:"Exercises CRUD",NEW_WORKOUT:"New workout",USER_WORKOUTS:"Workouts",STATS:"Stats"},es:{HOME:"Home",EXERCISES_CRUD:"ABM ejercicios",NEW_WORKOUT:"Nueva rutina",USER_WORKOUTS:"Rutinas",STATS:"Estadísticas"}},o={en:{LOGIN:"Login",SIGN_UP:"Sign up"},es:{LOGIN:"Iniciar sesión",SIGN_UP:"Registrarse"}},c={en:{NAME:"Name",PASSWORD:"Password",LOGIN:"Login",LOGOUT:"Logout"},es:{NAME:"Nombre",PASSWORD:"Contraseña",LOGIN:"Iniciar sesión",LOGOUT:"Cerrar sesión"}},l={en:{NAME:"Name",PASSWORD:"Password",CONFIRM_PASSWORD:"Confirm password",SIGN_UP:"Sign up"},es:{NAME:"Nombre",PASSWORD:"Contraseña",CONFIRM_PASSWORD:"Confirme contraseña",SIGN_UP:"Registrarse"}},u={en:{WORKOUTS:"Workouts",NEW_WORKOUT:"New workout",SELECT_EXERCISE:"Select exercise",CREATE:"Create",EXERCISE:"Exercise",REPS:"Reps",TIME:"Time",TITLE:"Title",DATE:"Date",ROUNDS:"Rounds",SETS:"Sets",ADD_SET:"Add set"},es:{WORKOUTS:"Rutinas",NEW_WORKOUT:"Nueva rutina",SELECT_EXERCISE:"Seleccione ejercicio",CREATE:"Crear",EXERCISE:"Ejercicio",REPS:"Repeticiones",TIME:"Tiempo",TITLE:"Título",DATE:"Fecha",ROUNDS:"Vueltas",SETS:"Series",ADD_SET:"Agregar serie"}},E={en:{EXERCISES_CRUD:"Exercises CRUD",TITLE:"Exercises",NAME:"Name",CREATE:"Create",MUSCLE_GROUPS:"Muscle groups",CANCEL:"Cancel",SAVE:"Save",DELETE:"Delete"},es:{EXERCISES_CRUD:"ABM ejercicios",TITLE:"Ejercicios",NAME:"Nombre",CREATE:"Crear",MUSCLE_GROUPS:"Grupos musculares",CANCEL:"Cancelar",SAVE:"Guardar",DELETE:"Eliminar"}},d={en:{OPTIONS:"Options",CHOOSE_DATE_RANGE:"Choose a date range",EXERCISES_FRECUENCY:"Exercises frecuency",NAME:"Name",TIMES_PERFORMED:"Times performed",TOP_TRAINED_MUSCLES:"Top trained muscles",PERCENTAGE:"Percentage",WORKOUT_FRECUENCY:"Workout frecuency",AVERAGE_IN:"Average in",DAYS:"days",TOTAL_WORKOUTS_IN_RANGE:"Total workouts in range:",WORKOUTS_EACH:"workouts each"},es:{OPTIONS:"Opciones",CHOOSE_DATE_RANGE:"Elija un rango de fechas",EXERCISES_FRECUENCY:"Ranking de ejercicios",NAME:"Nombre",TIMES_PERFORMED:"Veces realizado",TOP_TRAINED_MUSCLES:"Músculos más entrenados",PERCENTAGE:"Porcentaje",WORKOUT_FRECUENCY:"Frecuencia de entrenamiento",AVERAGE_IN:"Promedio en",DAYS:"días",TOTAL_WORKOUTS_IN_RANGE:"Entrenamientos totales: ",WORKOUTS_EACH:"entrenamientos cada"}};function m(){return c[a()]}function S(){return l[a()]}function p(){return u[a()]}function f(){return E[a()]}function C(){return s[a()]}function R(){return o[a()]}function _(){return i[a()]}function g(){return d[a()]}t["a"]={mainLayoutLabels:_,homeLabels:C,initialLayoutLabels:R,exerciseCRUDLabels:f,workoutCRUDLabels:p,loginLabels:m,signupLabels:S,statsLabels:g}},"3b04":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("fc74"),a=n.n(r),s=n("59a1"),i=n.n(s),o=function(){function e(t){a()(this,e),this.q=t}return i()(e,[{key:"success",value:function(e){this.q.notify({color:"green-4",textColor:"white",icon:"cloud_done",message:e})}},{key:"error",value:function(e){this.q.notify({color:"red-5",textColor:"white",icon:"warning",message:e})}}]),e}()},"621c":function(e,t,n){"use strict";n.d(t,"b",(function(){return s}));var r=n("4360"),a=function(){return r["a"].getters.language},s=["ARMS","LEGS","BACK","SHOULDERS","CHEST","CARDIO","CORE"],i={en:{ARMS:"ARMS",LEGS:"LEGS",BACK:"BACK",SHOULDERS:"SHOULDERS",CHEST:"CHEST",CARDIO:"CARDIO",CORE:"CORE"},es:{ARMS:"BRAZOS",LEGS:"PIERNAS",BACK:"ESPALDA",SHOULDERS:"HOMBROS",CHEST:"PECHO",CARDIO:"AERÓBICO",CORE:"ABDOMINALES"}};function o(e){return i[a()][e]}t["a"]={label:o}},9129:function(e,t,n){"use strict";var r=n("4360"),a=function(){return r["a"].getters.language},s={en:{WELCOME:"Welcome "},es:{WELCOME:"Bienvenido "}},i={en:{USER_CREATED:"Welcome "},es:{USER_CREATED:"Bienvenido "}},o={en:{WORKOUT_CREATED:"Workout created!"},es:{WORKOUT_CREATED:"Rutina creada!"}},c={en:{EXERCISE_CREATED:"Exercise created!",EXERCISE_UPDATED:"Exercise updated!",EXERCISE_DELETED:"Exercise deleted!"},es:{EXERCISE_CREATED:"Ejercicio creado!",EXERCISE_UPDATED:"Ejercicio actualizado!",EXERCISE_DELETED:"Ejercicio eliminado"}};function l(){return s[a()]}function u(){return i[a()]}function E(){return o[a()]}function d(){return c[a()]}t["a"]={loginSuccess:l,signupSuccess:u,workoutCRUDSuccess:E,exerciseCRUDSuccess:d}},"9ac2":function(e,t,n){"use strict";var r=n("4360"),a=function(){return r["a"].getters.language},s={en:{404:"Invalid username or password"},es:{404:"Usuario o contraseña incorrectos"}},i={en:{400:"User name already taken"},es:{400:"Ya existe un usuario con ese nombre"}},o={en:{}},c={en:{}};function l(e){return s[a()][e]}function u(e){return i[a()][e]}function E(e){return o[a()][e]}function d(e){return c[a()][e]}t["a"]={loginError:l,signupError:u,workoutCRUDError:E,exerciseCRUDError:d}},"9e27":function(e,t,n){"use strict";var r=n("4360"),a=function(){return r["a"].getters.language},s={en:{EMPTY_PASSWORD:"Password cannot be empty",EMPTY_NAME:"Name cannot be empty"},es:{EMPTY_PASSWORD:"La contraseña es obligatoria",EMPTY_NAME:"El nombre es obligatorio"}},i={en:{EMPTY_PASSWORD:"Password cannot be empty",EMPTY_NAME:"Name cannot be empty",PASSWORDS_DONT_MATCH:"Passwords dont match"},es:{EMPTY_PASSWORD:"La contraseña es obligatoria",EMPTY_NAME:"El nombre es obligatorio",PASSWORDS_DONT_MATCH:"Las contraseñas no coinciden"}},o={en:{NO_SETS:"You must add at least one set",INVALID_SET_FIELDS:"Every set must have an exercise and at least reps or time defined",EMPTY_TITLE:"Title cannot be empty"},es:{NO_SETS:"Agregue al menos una serie",INVALID_SET_FIELDS:"Todas las series deben tener repeticiones o tiempo",EMPTY_TITLE:"El título es obligatorio"}},c={en:{NAME:"Name",NO_MUSCLE_GROUPS:"All exercises must have at least one muscle group",EMPTY_NAME:"Name cannot be empty"},es:{NAME:"Nombre",NO_MUSCLE_GROUPS:"Todos los ejercicios deben tener al menos un grupo muscular",EMPTY_NAME:"El nombre es obligatorio"}},l={en:{INVALID_DAY_VALUE:"Only positive values"},es:{INVALID_DAY_VALUE:"Sólo valores positivos"}};function u(){return s[a()]}function E(){return i[a()]}function d(){return o[a()]}function m(){return c[a()]}function S(){return l[a()]}t["a"]={loginError:u,signupError:E,workoutCRUDError:d,exerciseCRUDError:m,statsError:S}},cf46:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"q-pa-md"},[n("q-table",{attrs:{title:e.title,data:e.data,columns:e.columns,pagination:e.pagination},on:{"row-click":e.onRowClick},scopedSlots:e._u([{key:"pagination",fn:function(t){return[t.pagesNumber>2?n("q-btn",{attrs:{icon:"first_page",color:"grey-8",round:"",dense:"",flat:"",disable:t.isFirstPage},on:{click:t.firstPage}}):e._e(),n("q-btn",{attrs:{icon:"chevron_left",color:"grey-8",round:"",dense:"",flat:"",disable:t.isFirstPage},on:{click:t.prevPage}}),n("q-btn",{attrs:{icon:"chevron_right",color:"grey-8",round:"",dense:"",flat:"",disable:t.isLastPage},on:{click:t.nextPage}}),e.pagesNumber>2?n("q-btn",{attrs:{icon:"last_page",color:"grey-8",round:"",dense:"",flat:"",disable:t.isLastPage},on:{click:t.lastPage}}):e._e()]}}])})],1)},a=[],s={props:{title:{type:String},columns:{type:Array},data:{type:Array}},data:function(){return JSON.parse(this.data),{pagination:{sortBy:"desc",descending:!1,page:2,rowsPerPage:5}}},methods:{onRowClick:function(e,t){this.$emit("rowClicked",t)}}},i=s,o=n("2877"),c=n("eaac"),l=n("9c40"),u=n("eebe"),E=n.n(u),d=Object(o["a"])(i,r,a,!1,null,null,null);t["a"]=d.exports;E()(d,"components",{QTable:c["a"],QBtn:l["a"]})},dd85:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"absolute-center q-mt-xl full-width",staticStyle:{"max-width":"90%"}},[n("q-card",{staticClass:"my-card q-mt-xl"},[n("q-card-section",[n("div",{staticClass:"text-h6 wo-black-form-title"},[e._v(" "+e._s(e.Label().EXERCISES_CRUD)+" ")]),n("AddExercise"),n("Exercises")],1)],1)],1)},a=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"q-pa-md row justify-center"},[n("q-form",{staticClass:"q-gutter-bg",on:{submit:e.submitExercise}},[n("q-input",{attrs:{filled:"",label:e.Label().NAME},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),n("MultipleSelector",{attrs:{options:e.muscleGroupOptions,label:e.muscleGroupsLabel()},on:{selectedDataChanged:function(t){e.muscleGroups=t}}}),n("br"),n("div",{staticClass:"row justify-center"},[e.loading?n("q-spinner",{attrs:{color:"primary",size:"3em",thickness:10}}):n("q-btn",{attrs:{label:e.Label().CREATE,type:"submit",color:"primary"}})],1)],1)],1)},i=[],o=n("967e"),c=n.n(o),l=(n("7f7f"),n("96cf"),n("fa84")),u=n.n(l),E=n("6e87"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"q-pa-md"},[n("div",{staticStyle:{"min-width":"250px","max-width":"300px"}},[n("q-select",{attrs:{filled:"",multiple:"",options:e.options,"use-chips":"","stack-label":"",label:e.label},on:{change:function(t){return e.selectedDataChanged(t)}},model:{value:e.selectedData,callback:function(t){e.selectedData=t},expression:"selectedData"}})],1)])},m=[],S={name:"MultipleSelector",props:{label:{type:String,required:!0},options:{type:Array,required:!0},data:{type:Array,required:!1}},data:function(){return{selectedData:this.data}},watch:{selectedData:function(){this.$emit("selectedDataChanged",this.selectedData)}},methods:{selectedDataChanged:function(e){this.selectedData=e.target.value,this.$emit("selectedDataChanged",this.selectedData)}}},p=S,f=n("2877"),C=n("ddd8"),R=n("eebe"),_=n.n(R),g=Object(f["a"])(p,d,m,!1,null,null,null),b=g.exports;_()(g,"components",{QSelect:C["a"]});var A=n("ed90"),D=n("621c"),O=n("3b04"),T=n("9ac2"),x=n("9e27"),L=n("9129"),N=n("1a50"),U=function(){return x["a"].exerciseCRUDError()},h=T["a"].exerciseCRUDError,M=function(){return L["a"].exerciseCRUDSuccess()},P=function(){return N["a"].exerciseCRUDLabels()},v={name:"CreateExercise",data:function(){return{notifier:new O["a"](this.$q),Label:P,loading:!1,LocalError:U,name:"",muscleGroups:[],muscleGroupsLabel:function(){return P().MUSCLE_GROUPS},muscleGroupOptions:D["b"]}},components:{MultipleSelector:b},methods:{submitExercise:function(){var e=this;return u()(c.a.mark((function t(){var n;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.loading=!0,""!==e.name){t.next=5;break}e.notifier.error(U().EMPTY_NAME),t.next=20;break;case 5:if(!(e.muscleGroups.length<=0)){t.next=9;break}e.notifier.error(U().NO_MUSCLE_GROUPS),t.next=20;break;case 9:return t.prev=9,t.next=12,A["a"].postNewExercise(e.buildExerciseModel());case 12:n=t.sent,e.commitExercise(n),e.notifier.success(M().EXERCISE_CREATED),t.next=20;break;case 17:t.prev=17,t.t0=t["catch"](9),e.notifier.error(h(t.t0.status)||t.t0.message);case 20:e.loading=!1;case 21:case"end":return t.stop()}}),t,null,[[9,17]])})))()},commitExercise:function(e){this.$store.commit(E["a"],e)},buildExerciseModel:function(){return{name:this.name,muscleGroups:this.muscleGroups}}}},I=v,y=n("0378"),w=n("27f9"),k=n("0d59"),G=n("9c40"),q=Object(f["a"])(I,s,i,!1,null,null,null),W=q.exports;_()(q,"components",{QForm:y["a"],QInput:w["a"],QSpinner:k["a"],QBtn:G["a"]});var Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Table",{attrs:{title:e.table.title,columns:e.table.columns,data:e.table.data},on:{rowClicked:e.rowClicked}}),e.dialog.display?n("ExercisesDialog",{attrs:{_display:e.dialog.display,exercise:e.dialog.exercise},on:{closeDialog:e.closeDialog}}):e._e()],1)},j=[],H=n("cf46"),K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"q-pa-md q-gutter-sm"},[n("q-dialog",{attrs:{persistent:""},model:{value:e._display,callback:function(t){e._display=t},expression:"_display"}},[n("q-card",{staticStyle:{"min-width":"350px"}},[n("q-card-section",[n("div",{staticClass:"text-h6"},[e._v(e._s(e.Label().NAME))])]),n("q-card-section",{staticClass:"q-pt-none"},[n("q-input",{attrs:{dense:"",autofocus:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),n("q-card-section",{staticClass:"q-pt-none"},[n("MultipleSelector",{attrs:{data:e.muscleGroups,options:e.muscleGroupOptions,label:e.muscleGroupsLabel()},on:{selectedDataChanged:function(t){e.muscleGroups=t}}})],1),n("div",{staticClass:"row justify-center"},[e.loading?n("q-spinner",{attrs:{color:"primary",size:"3em",thickness:10}}):n("q-card-actions",{staticClass:"text-primary",attrs:{align:"right"}},[n("q-btn",{attrs:{flat:"",label:e.Label().CANCEL},on:{click:e.closeDialog}}),n("q-btn",{attrs:{flat:"",label:e.Label().SAVE},on:{click:e.save}}),n("q-btn",{attrs:{flat:"",label:e.Label().DELETE},on:{click:e.remove}})],1)],1)],1)],1)],1)},X=[],B=function(){return x["a"].exerciseCRUDError()},$=T["a"].exerciseCRUDError,Q=function(){return L["a"].exerciseCRUDSuccess()},F=function(){return N["a"].exerciseCRUDLabels()},V={components:{MultipleSelector:b},props:{_display:{type:Boolean,required:!0},exercise:{type:Object,required:!0}},data:function(){return{loading:!1,Label:F,name:this.exercise.name,display:"",muscleGroups:this.exercise.muscleGroups,muscleGroupOptions:D["b"],muscleGroupsLabel:function(){return F().MUSCLE_GROUPS},notifier:new O["a"](this.$q)}},methods:{save:function(){var e=this;return u()(c.a.mark((function t(){var n;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.loading=!0,""!==e.name){t.next=5;break}e.notifier.error(B().EMPTY_NAME),t.next=20;break;case 5:if(!(e.muscleGroups.length<=0)){t.next=9;break}e.notifier.error(B().NO_MUSCLE_GROUPS),t.next=20;break;case 9:return t.prev=9,t.next=12,A["a"].updateExercise(e.buildExerciseModel());case 12:n=t.sent,e.commitUpdate(n),e.notifier.success(Q().EXERCISE_UPDATED),t.next=20;break;case 17:t.prev=17,t.t0=t["catch"](9),e.notifier.error($(t.t0.status)||t.t0.message);case 20:e.loading=!1,e.closeDialog();case 22:case"end":return t.stop()}}),t,null,[[9,17]])})))()},commitUpdate:function(e){this.$store.commit(E["g"],e)},buildExerciseModel:function(){return{_id:this.exercise._id,name:this.name,muscleGroups:this.muscleGroups}},remove:function(){var e=this;return u()(c.a.mark((function t(){return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.prev=1,t.next=4,A["a"].deleteExercise(e.exercise._id);case 4:e.commitDelete(e.exercise._id),e.notifier.success(Q().EXERCISE_DELETED),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](1),e.notifier.error($(t.t0.status)||t.t0.message);case 11:e.loading=!1,e.closeDialog();case 13:case"end":return t.stop()}}),t,null,[[1,8]])})))()},closeDialog:function(){this.$emit("closeDialog")},commitDelete:function(e){this.$store.commit(E["d"],{exerciseId:e})}}},z=V,J=n("24e8"),Z=n("f09f"),ee=n("a370"),te=n("4b7e"),ne=Object(f["a"])(z,K,X,!1,null,null,null),re=ne.exports;_()(ne,"components",{QDialog:J["a"],QCard:Z["a"],QCardSection:ee["a"],QInput:w["a"],QSpinner:k["a"],QCardActions:te["a"],QBtn:G["a"]});var ae=function(){return N["a"].exerciseCRUDLabels()},se={name:"Exercises",components:{Table:H["a"],ExercisesDialog:re},computed:{exercises:function(){return this.$store.state.exercises}},data:function(){return{table:{title:ae().TITLE,columns:[{name:"Name",required:!0,label:ae().NAME,align:"left",field:function(e){return e.name},format:function(e){return"".concat(e)}},{name:"Muscle groups",required:!0,label:ae().MUSCLE_GROUPS,align:"center",field:function(e){return e.muscleGroups.map((function(e){return D["a"].label(e)}))},format:function(e){return"".concat(e)}}],data:this.$store.state.exercises},dialog:{display:!1,exercise:null}}},methods:{rowClicked:function(e){this.dialog.exercise=e,this.dialog.display=!0},closeDialog:function(){this.dialog.display=!1}}},ie=se,oe=Object(f["a"])(ie,Y,j,!1,null,null,null),ce=oe.exports,le=function(){return N["a"].exerciseCRUDLabels()},ue={data:function(){return{Label:le}},name:"ExerciseCRUD",components:{AddExercise:W,Exercises:ce}},Ee=ue,de=Object(f["a"])(Ee,r,a,!1,null,null,null);t["default"]=de.exports;_()(de,"components",{QCard:Z["a"],QCardSection:ee["a"]})}}]);