openerp.web_gallery = function(instance, m) {
var _t = instance.web._t,
    QWeb = instance.web.qweb;
    var tableau = []
    var taille = 0
    instance.web.Sidebar = instance.web.Sidebar.extend({
    
        start: function() {
            var self = this;
            this._super(this);
            self.add_items('other', [
                {   label: _t('Show Gallery'),
                    callback: self.on_click_show_gallery,
                    classname: 'oe_share' },
            ]);

            

        },
        on_click_close_gallery: function() {
            var self = this;
            $('#gallery_main, #lightwrap').remove();
        },
        on_resize_window : function() {
            var self = this;
            width = $(window).width();
            height = $(window).height();
            $('#gallery_middle').css('width', width+'px');
            $('#gallery_middle').css('height', height-170+'px');
            $('#img_main').css('max-width', width+'px');
            $('#img_main').css('max-height', height-180+'px');
            
        },
        on_click_show_gallery: function() {
            var self = this;
            
            instance.web.blockUI(); 
            
            tableau = []
            taille = 0
            
            Attachments = new instance.web.Model("ir.attachment");
            Attachments.query(['name','datas_fname','file_type','db_datas']).filter([['res_model', '=', this.dataset.model],['res_id', '=', this.dataset.ids[this.dataset.index]]]).all().then(function (pieces) {
			    _.each(pieces, function(piece){ 
			         if ((/\.(gif|jpg|jpeg|tiff|png|bmp)$/i).test(piece['datas_fname'])){
                         element = [piece['name'],piece['datas_fname'],piece['file_type'],piece['db_datas']];
                         tableau.push(element);			         
                     }
			    });
	            taille = tableau.length;
	            if(taille > 0){
	                     list_img = '<ul class="thumbnail_list">';
	                     for (i=0; i<taille; i++){
	                       list_img += '<li class="list_item"><img src="data:'+tableau[i][2]+';base64,'+tableau[i][3]+'" alt="'+tableau[i][0]+'" title="'+tableau[i][0]+'" img_index="'+i+'" list_img_taille="'+taille+'"/></li>';
	                     }
	                     list_img += '</ul>';
	                     $('body').append("\
		                     <div id='lightwrap'> \
                             </div>  \
			                     <div id='gallery_main'> \
									<div id='gallery_top'> \
										<div id='gallery_top_left'> \
		                                 </div>  \
		                                 <div id='gallery_top_right'> \
		                                 </div>  \
									 </div>  \
	                                <div id='gallery_middle'> \
	                                <img id='img_main' /> \
	                                 </div>  \
	                                <div id='gallery_bottom'> \
	                                "+list_img+"\
	                                 </div>  \
		                         </div>  \
	                     ");
	                     $('#gallery_top_right').click(function() {
                            self.on_click_close_gallery();
                         });
                         $('.list_item').click(function() {
                            var img_data = $(this).find('img').attr("src");
                            var img_index = $(this).find('img').attr("img_index");
                            var list_img_taille = $(this).find('img').attr("list_img_taille");
                            var img_caption = $(this).find('img').attr("alt");
                            $('#img_main').attr("src",img_data);
                            $('#gallery_top_left').html(''+(parseInt(img_index)+1)+'/'+list_img_taille+' - '+img_caption);
                         });
                            $(document).ready(function() {
                                self.on_resize_window();
                                $('.thumbnail_list .list_item').first().click();
						       
						        $(document).keyup(function(e) {
								  if (e.keyCode == 27) { self.on_click_close_gallery(); }  
								});
						    });
						    $(window).resize(function() {
							     self.on_resize_window();
							});
                         
	                 
	            } else {
	                 instance.web.dialog($("<div />").text(_t("No image found for this document.")), {
	                    title: _t("Warning"),
	                    modal: true
	                });
	            }
			});

			
			instance.web.unblockUI();
        },
    });
}