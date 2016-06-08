var plateau =[[],[],[],[],[],[],[],[]] ;
var joueur="noir";
var autrejoueur="blanc";
var posx;
var posy;
var continu=true;
var compteur=0;
var possible=false;

//charge jquery
$(function(){
	//génération du  plateau

	for (var i = 0; i < 8; i++) {
		$('table').append("<tr></tr>");
		for (var y=0; y<8; y++) {
			$('tr').eq(-1).append("<td></td>")
			$('td').eq(-1).attr("id",(+i+""+y));
		}
	}

	plateau[3][3]="blanc";
	plateau[4][4]="blanc";
	plateau[3][4]="noir";
	plateau[4][3]="noir";

	$("#33").off("click");
	$("#44").off("click");
	$("#34").off("click");
	$("#43").off("click");

	for (var i=0;i<8;i++){
		for (var y=0;y<8;y++){
			if (plateau[y][i]==="blanc"){
				$("#"+y+i).html("<i class=\"fa fa-circle\" aria-hidden=\"true\"></i>").removeClass().addClass("blanc");
			}
			if (plateau[y][i]==="noir") {
				$("#"+y+i).html("<i class=\"fa fa-circle\" aria-hidden=\"true\"></i>").removeClass().addClass("noir");
			}

		}
	}



	$("td").click(function(){
		// verification si case deja occupée

		if (($(this).hasClass("blanc"))||($(this).hasClass("noir"))){
			alert("cette case est occupée !!!")
		}
		else {

			// enregistrement des coordonées de la case jouées
			posx= $(this).index();
			posy= $(this).parent().index();

			// écriture de la case joué dans le tableaux en fonction du joueur, et changement de joueur
			if (joueur ==="noir") {
				plateau[posy][posx]='noir';

			}
			else {
				plateau[posy][posx]='blanc';

			}

			//test puis retournement
			//axe X+
			possible=false;
			continu=true;
			compteur=0;

			for (x=posx;continu;x++){
				if(plateau[posy][x+1]===autrejoueur){
					compteur++;
				}
				else {
					continu=false;
					if (plateau[posy][x+1]===joueur){
					possible=true;
					}
				}
			}
			if (possible) {
				for (x=posx;x<(posx+compteur);x++){
					plateau[posy][x+1]=joueur;
				}
			}

			//axe X-
			possible=false;
			continu=true;
			compteur=0;

			for (x=posx;continu;x--){
				if(plateau[posy][x-1]===autrejoueur){
					compteur++;
				}
				else {
					continu=false;
					if (plateau[posy][x-1]===joueur){
					possible=true;
					}
				}
			}
			if (possible) {
				for (x=posx;x>(posx-compteur);x--){
					plateau[posy][x-1]=joueur;
				}
			}

			//axe y+
			possible=false;
			continu=true;
			compteur=0;

			for (y=posy;(continu && (y<7));y++){
				if(plateau[y+1][posx]===autrejoueur){
					compteur++;
				}
				else {
					continu=false;
					if (plateau[y+1][posx]===joueur){
					possible=true;
					}
				}
			}
			if (possible) {
				for (y=posy;y<(posy+compteur);y++){
					plateau[y+1][posx]=joueur;
				}
			}

			//axe y-
			possible=false;
			continu=true;
			compteur=0;

			for (y=posy;(continu && (y>0));y--){
				if(plateau[y-1][posx]===autrejoueur){
					compteur++;
				}
				else {
					continu=false;
					if (plateau[y-1][posx]===joueur){
					possible=true;
					}
				}
			}
			if (possible) {
				for (y=posy;y>(posy-compteur);y--){
					plateau[y-1][posx]=joueur;
				}
			}


			//axe y+x+
			possible=false;
			continu=true;
			compteur=0;

			for (x=posx y=posy;(continu && (y<7));x++ y++){
				if(plateau[y+1][x+1]===autrejoueur){
					compteur++;
				}
				else {
					continu=false;
					if (plateau[y+1][x+1]===joueur){
					possible=true;
					}
				}
			}
			if (possible) {
				for (x=posx y=posy;x<(posx+compteur);x++ y++){
					plateau[y+1][i+1]=joueur;
				}
			}

			//axe y+x-
			possible=false;
			continu=true;
			compteur=0;

			for (x=posx y=posy ;(continu && (y<7));x-- y++){
				if(plateau[y+1][x-1]===autrejoueur){
					compteur++;
				}
				else {
					continu=false;
					if (plateau[y+1][x-1]===joueur){
					possible=true;
					}
				}
			}
			if (possible) {
				for (x=posx y=posy ;x>(posx-compteur);x-- y++){
					plateau[y+1][x-1]=joueur;
				}
			}

			//axe y-x+
			possible=false;
			continu=true;
			compteur=0;

			for (x=posx y=posy;(continu && (y>0));x++ y--){
				if(plateau[y-1][x+1]===autrejoueur){
					compteur++;
				}
				else {
					continu=false;
					if (plateau[y-1][x+1]===joueur){
					possible=true;
					}
				}
			}
			if (possible) {
				for (x=posx y=posy;x<(posx+compteur);x++ y--){
					plateau[y-1][x+1]=joueur;
				}
			}

			//axe y-x-
			possible=false;
			continu=true;
			compteur=0;

			for (x=posx y=posy;(continu && (y>0));x-- y--){
				if(plateau[y-1][x-1]===autrejoueur){
					compteur++;
				}
				else {
					continu=false;
					if (plateau[y-1][x-1]===joueur){
					possible=true;
					}
				}
			}
			if (possible) {
				for (x=posx y=posy;x>(posx-compteur);x-- y--){
					plateau[y-1][x-1]=joueur;
				}
			}

			//changement de joueur
			if (joueur==="noir") {
				joueur="blanc";
				autrejoueur="noir";
			}
			else{
				joueur="noir";
				autrejoueur="blanc";
			}

			for (var i=0;i<8;i++){
				for (var y=0;y<8;y++){
					if (plateau[y][i]==="blanc"){
						$("#"+y+i).html("<i class=\"fa fa-circle\" aria-hidden=\"true\"></i>").removeClass().addClass("blanc");
					}
					if (plateau[y][i]==="noir") {
						$("#"+y+i).html("<i class=\"fa fa-circle\" aria-hidden=\"true\"></i>").removeClass().addClass("noir");
					}
				}
			}

		}
	}); //fin de fonction click

});//fin jquery

