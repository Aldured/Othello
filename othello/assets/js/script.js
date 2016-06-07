var plateau =[[],[],[],[],[],[],[],[]] ;
var verif =[[],[],[],[],[],[],[],[]] ;
var joueur="noir";
var autrejoueur="blanc";
var posx;
var posy;
var nomb;

//charge jquery
$(function(){
	//génération du  plateau

	for (var i = 1; i < 9; i++) {
		$('table').append("<tr></tr>");
		for (var y=1; y<9; y++) {
			$('tr').eq(-1).append("<td></td>")
			$('td').eq(-1).attr("id",(+i+""+y));
		}
	}

	plateau[3][3]="blanc";
	plateau[4][4]="blanc";
	plateau[3][4]="noir";
	plateau[4][3]="noir";

	for (var i=1;i<9;i++){
		for (var y=1;y<9;y++){
			if (plateau[y-1][i-1]==="blanc"){
				$("#"+y+i).html("<i class=\"fa fa-circle\" aria-hidden=\"true\"></i>").addClass("blanc");
			}
			if (plateau[y-1][i-1]==="noir") {
				$("#"+y+i).html("<i class=\"fa fa-circle\" aria-hidden=\"true\"></i>").addClass("noir");
			}

		}
	}



	$("td").click(function(){
		// désactivation de la case jouée
		$(this).off("click");

		// enregistrement des coordonées de la case jouées
		posx= $(this).index();
		posy= $(this).parent().index();

		// écriture de la case joué dans le tableaux en fonction du joueur, et changement de joueur
		if (joueur ==="noir") {
			plateau[posy][posx]='noir';
			nomb=cherche();
			joueur="blanc";
			autrejoueur="noir";

		}
		else {
			plateau[posy][posx]='blanc';
			nomb=cherche();
			joueur="noir";
			autrejoueur="blanc";
		}









		for (var i=1;i<9;i++){
			for (var y=1;y<9;y++){
				if (plateau[y-1][i-1]==="blanc"){
					$("#"+y+i).html("<i class=\"fa fa-circle\" aria-hidden=\"true\"></i>").addClass("blanc");
				}
				if (plateau[y-1][i-1]==="noir") {
					$("#"+y+i).html("<i class=\"fa fa-circle\" aria-hidden=\"true\"></i>").addClass("noir");
				}

			}
		}

	}); //fin de fonction click




});//fin jquery

//recherche un piont de meme couleur sur la ligne
function cherche (){
	var continu=true;
	var compteur=0;
	for (i=1;continu=false;i++){
		if(plateau[posy][posx+i]===autrejoueur){
			continu=true;
			compteur++;

		}
		else {
			continu=false;
			if (plateau[posy][posx+i]===joueur){
			return compteur;
			}
		}
	}

};