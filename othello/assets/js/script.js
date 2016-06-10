var plateau =[[],[],[],[],[],[],[],[]] ;
var joueur="noir";
var autrejoueur="blanc";
var posx;
var posy;
var test=false;
var jeupossible;
var nbnoir=0;
var nbblanc=0;
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
			alert("cette case est occupée !!!");
		}
		else {

			//test si solution possible
			jeupossible=false;
			for (i=0 ;i<8;i++ ){
				for (j=0; j<8;j++){
					posx=i;
					posy=j;
					if ((plateau[j][i]!="noir")&&(plateau[j][i]!="blanc")&&((testdebut("","+"))||(testdebut("","-"))||(testdebut("+",""))||(testdebut("-",""))||(testdebut("+","+"))||(testdebut("+","-"))||(testdebut("-","+"))||(testdebut("-","-")))){
						jeupossible=true;
					}
				}
			}

			if(jeupossible){
				// enregistrement des coordonées de la case jouées
				posx= $(this).index();
				posy= $(this).parent().index();



				//controle combinaison possible, obligatoir pour jouer
				if ((testdebut("","+"))||(testdebut("","-"))||(testdebut("+",""))||(testdebut("-",""))||(testdebut("+","+"))||(testdebut("+","-"))||(testdebut("-","+"))||(testdebut("-","-"))){

					// écriture de la case joué dans le tableaux en fonction du joueur, et changement de joueur
					if (joueur ==="noir") {
						plateau[posy][posx]='noir';

					}
					else {
						plateau[posy][posx]='blanc';

					}


					//test puis retournement
					//test y0 x+
					cherche("","+");
					//test y0 x-
					cherche("","-");
					//test y+ x0
					cherche("+","");
					//test y- x0
					cherche("-","");
					//test y+ x+
					cherche("+","+");
					//test y+ x-
					cherche("+","-");
					//test y- x+
					cherche("-","+");
					//test y- x-
					cherche("-","-");


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
				else {alert("vous devez jouer une case avec combinaison possible");}
			}
			else{
				alert("pas de position possible pour joueur "+joueur+",il doit passer son tour.");
				//changement de joueur
				if (joueur==="noir") {
					joueur="blanc";
					autrejoueur="noir";
				}
				else{
					joueur="noir";
					autrejoueur="blanc";
				}
			}
			if(joueur==="noir"){ $("#joueur").removeClass().addClass("noir");	}
			else{$("#joueur").removeClass().addClass("blanc");}
		}
	}); //fin de fonction click

});//fin jquery

function testdebut (sensy,sensx){

			var possible=false;
			var continu=true;
			var compteur=0;
			var x=posx;
			var y=posy;
			var limity=false;
			var mouvy;
			var mouvx;

			if (sensy==="+"){if(y===7){limity=true;}}
			if (sensy==="-"){if(y===0){limity=true;}}

			while (continu && (!limity)){

				if (sensy==="+"){mouvy=y+1;}
				if (sensy==="-"){mouvy=y-1;}
				if (sensy===""){mouvy=y;}
				if (sensx==="+"){mouvx=x+1;}
				if (sensx==="-"){mouvx=x-1;}
				if (sensx===""){mouvx=x;}

				if(plateau[mouvy][mouvx]===autrejoueur){compteur++;}
				else{
					continu=false;
					if ((plateau[mouvy][mouvx]===joueur)&(compteur>0)){possible=true;}
				}
				if (sensy==="+"){y++;}
				if (sensy==="-"){y--;}
				if (sensx==="+"){x++;}
				if (sensx==="-"){x--;}
				if (sensy==="+"){if(y===7){limity=true;}}
				if (sensy==="-"){if(y===0){limity=true;}}
			}
			return possible;
		}

function cherche (sensy,sensx){

	var possible=false;
	var continu=true;
	var compteur=0;
	var x=posx;
	var y=posy;
	var limity=false;
	var mouvy;
	var mouvx;

	if (sensy==="+"){if(y===7){limity=true;}}
	if (sensy==="-"){if(y===0){limity=true;}}

	while (continu && (!limity)){

		if (sensy==="+"){mouvy=y+1;}
		if (sensy==="-"){mouvy=y-1;}
		if (sensy===""){mouvy=y;}
		if (sensx==="+"){mouvx=x+1;}
		if (sensx==="-"){mouvx=x-1;}
		if (sensx===""){mouvx=x;}

		if(plateau[mouvy][mouvx]===autrejoueur){compteur++;}
		else {
			continu=false;
			if (plateau[mouvy][mouvx]===joueur){possible=true;}
		}
		if (sensy==="+"){y++;}
		if (sensy==="-"){y--;}
		if (sensx==="+"){x++;}
		if (sensx==="-"){x--;}
		if (sensy==="+"){if(y===7){limity=true;}}
		if (sensy==="-"){if(y===0){limity=true;}}
	}
	if (possible) {
		x=posx;
		y=posy;

		for (i=0;i<compteur;i++){

			if (sensy==="+"){mouvy=y+1;}
			if (sensy==="-"){mouvy=y-1;}
			if (sensy===""){mouvy=y;}
			if (sensx==="+"){mouvx=x+1;}
			if (sensx==="-"){mouvx=x-1;}
			if (sensx===""){mouvx=x;}

			plateau[mouvy][mouvx]=joueur;

			if (sensy==="+"){y++;}
			if (sensy==="-"){y--;}
			if (sensx==="+"){x++;}
			if (sensx==="-"){x--;}
		}
	}
}



