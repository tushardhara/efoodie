$(function () {
    $('input').iCheck({
      checkboxClass: 'icheckbox_square-blue',
      radioClass: 'iradio_square-blue',
      increaseArea: '20%' // optional
    });
    $('.createAudience').on('click',function(event){
    	event.preventDefault();
    	swal({
		  title: 'Create',
		  text: 'Enter name of the Audience?',
		  input : 'text',
		  inputPlaceholder : 'Audience',
		  inputValue : '',
		  showConfirmButton: true,
		  showCancelButton: true,
		  confirmButtonText: 'Create',
		  cancelButtonText: 'Cancel',
		}).then(function(inputValue) {
			$.ajax({
			    url: '/api/audiences',
			    method: 'POST',
			    contentType: 'application/json', 
			    processData: false,
			    data: JSON.stringify({
			        name: inputValue
			    }),
			    success: function() {
			        swal(
				      'Success',
				      'Audience is added :)',
				      'success'
				    );
				    location.reload();
			    },
			    failure: function(msg) {
			        swal(
				      'Error',
				      msg,
				      'error'
				    );
			    },
			    error: function(xhr, status, text) {
			        swal(
				      'Error',
				      xhr.responseJSON.message,
				      'error'
				    );
			    }
			});  
		}, function(dismiss) {
		  // dismiss can be 'cancel', 'overlay', 'close', 'timer'
		  if (dismiss === 'cancel') {
		    swal(
		      'Cancelled',
		      'You did not add anything :)',
		      'error'
		    );
		  }
		});
    })
    $('.deleteAudience').on('click',function(event){
    	event.preventDefault();
    	var ID = $(this).attr('data-id');
    	swal({
		  title: 'Delete',
		  text:'Do you want to delete this Audience?',
		  showConfirmButton: true,
		  showCancelButton: true,
		  confirmButtonText: 'Delete',
		  confirmButtonColor: '#d63032',
		  cancelButtonText: 'Cancel',
		}).then(function() {
			$.ajax({
			    url: '/api/audiences',
			    method: 'DELETE',
			    contentType: 'application/json', 
			    processData: false,
			    data: JSON.stringify({
			        id: ID
			    }),
			    success: function() {
			        swal(
				      'Success',
				      'Audience is deleted :)',
				      'success'
				    );
				    location.reload();
			    },
			    failure: function(msg) {
			        swal(
				      'Error',
				      msg,
				      'error'
				    );
			    },
			    error: function(xhr, status, text) {
			        console.log(xhr,status,text);
			        swal(
				      'Error',
				      xhr.responseJSON.message,
				      'error'
				    );
			    }
			});  
		}, function(dismiss) {
		  // dismiss can be 'cancel', 'overlay', 'close', 'timer'
		  if (dismiss === 'cancel') {
		    swal(
		      'Cancelled',
		      'You did not delete anything :)',
		      'error'
		    );
		  }
		});
    });
    $('.editAudience').on('click',function(event){
    	event.preventDefault();
    	var ID = $(this).attr('data-id');
    	var Name = $(this).attr('data-name');
    	swal({
		  title: 'Edit',
		  text:'Do you want to edit this Audience?',
		  input : 'text',
		  inputPlaceholder : 'Audience',
		  inputValue : Name,
		  showConfirmButton: true,
		  showCancelButton: true,
		  confirmButtonText: 'Edit',
		  cancelButtonText: 'Cancel',
		}).then(function(inputValue) {
			$.ajax({
			    url: '/api/audiences/'+ID,
			    method: 'PUT',
			    contentType: 'application/json', 
			    processData: false,
			    data: JSON.stringify({
			        name: inputValue,
			    }),
			    success: function() {
			        swal(
				      'Success',
				      'Audience is deleted :)',
				      'success'
				    );
				    location.reload();
			    },
			    failure: function(msg) {
			        swal(
				      'Error',
				      msg,
				      'error'
				    );
			    },
			    error: function(xhr, status, text) {
			        console.log(xhr,status,text);
			        swal(
				      'Error',
				      xhr.responseJSON.message,
				      'error'
				    );
			    }
			});  
		}, function(dismiss) {
		  // dismiss can be 'cancel', 'overlay', 'close', 'timer'
		  if (dismiss === 'cancel') {
		    swal(
		      'Cancelled',
		      'You did not edit anything :)',
		      'error'
		    );
		  }
		});
    });
    $('.createGenre').on('click',function(event){
    	event.preventDefault();
    	swal({
		  title: 'Create',
		  text: 'Enter name of the Genre?',
		  input : 'text',
		  inputPlaceholder : 'Genre',
		  inputValue : '',
		  showConfirmButton: true,
		  showCancelButton: true,
		  confirmButtonText: 'Create',
		  cancelButtonText: 'Cancel',
		}).then(function(inputValue) {
			$.ajax({
			    url: '/api/genres',
			    method: 'POST',
			    contentType: 'application/json', 
			    processData: false,
			    data: JSON.stringify({
			        name: inputValue
			    }),
			    success: function() {
			        swal(
				      'Success',
				      'Genre is added :)',
				      'success'
				    );
				    location.reload();
			    },
			    failure: function(msg) {
			        swal(
				      'Error',
				      msg,
				      'error'
				    );
			    },
			    error: function(xhr, status, text) {
			        swal(
				      'Error',
				      xhr.responseJSON.message,
				      'error'
				    );
			    }
			});  
		}, function(dismiss) {
		  // dismiss can be 'cancel', 'overlay', 'close', 'timer'
		  if (dismiss === 'cancel') {
		    swal(
		      'Cancelled',
		      'You did not add anything :)',
		      'error'
		    );
		  }
		});
    })
    $('.deleteGenre').on('click',function(event){
    	event.preventDefault();
    	var ID = $(this).attr('data-id');
    	swal({
		  title: 'Delete',
		  text:'Do you want to delete this Genre?',
		  showConfirmButton: true,
		  showCancelButton: true,
		  confirmButtonText: 'Delete',
		  confirmButtonColor: '#d63032',
		  cancelButtonText: 'Cancel',
		}).then(function() {
			$.ajax({
			    url: '/api/genres',
			    method: 'DELETE',
			    contentType: 'application/json', 
			    processData: false,
			    data: JSON.stringify({
			        id: ID
			    }),
			    success: function() {
			        swal(
				      'Success',
				      'Genre is deleted :)',
				      'success'
				    );
				    location.reload();
			    },
			    failure: function(msg) {
			        swal(
				      'Error',
				      msg,
				      'error'
				    );
			    },
			    error: function(xhr, status, text) {
			        console.log(xhr,status,text);
			        swal(
				      'Error',
				      xhr.responseJSON.message,
				      'error'
				    );
			    }
			});  
		}, function(dismiss) {
		  // dismiss can be 'cancel', 'overlay', 'close', 'timer'
		  if (dismiss === 'cancel') {
		    swal(
		      'Cancelled',
		      'You did not delete anything :)',
		      'error'
		    );
		  }
		});
    });
    $('.editGenre').on('click',function(event){
    	event.preventDefault();
    	var ID = $(this).attr('data-id');
    	var Name = $(this).attr('data-name');
    	swal({
		  title: 'Edit',
		  text:'Do you want to edit this Genre?',
		  input : 'text',
		  inputPlaceholder : 'Genre',
		  inputValue : Name,
		  showConfirmButton: true,
		  showCancelButton: true,
		  confirmButtonText: 'Edit',
		  cancelButtonText: 'Cancel',
		}).then(function(inputValue) {
			$.ajax({
			    url: '/api/genres/'+ID,
			    method: 'PUT',
			    contentType: 'application/json', 
			    processData: false,
			    data: JSON.stringify({
			        name: inputValue,
			    }),
			    success: function() {
			        swal(
				      'Success',
				      'Genre is edited :)',
				      'success'
				    );
				    location.reload();
			    },
			    failure: function(msg) {
			        swal(
				      'Error',
				      msg,
				      'error'
				    );
			    },
			    error: function(xhr, status, text) {
			        console.log(xhr,status,text);
			        swal(
				      'Error',
				      xhr.responseJSON.message,
				      'error'
				    );
			    }
			});  
		}, function(dismiss) {
		  // dismiss can be 'cancel', 'overlay', 'close', 'timer'
		  if (dismiss === 'cancel') {
		    swal(
		      'Cancelled',
		      'You did not edit anything :)',
		      'error'
		    );
		  }
		});
    });
    $('.createCategories').on('click',function(event){
    	event.preventDefault();
    	genres = JSON.parse($(this).attr('data-geners'));
    	options = '';
    	genres.forEach(function(val){
    		options +='<option value="'+val.id+'">'+val.name+'</option>';
    	})
    	swal({
		  title: 'Create',
		  text: 'Enter name of the Category?',
		  html:'<select id="swal-input2" class="swal2-input">'+options+'</select>' +
		  '<input id="swal-input1" class="swal2-input" autofocus>' ,
		  showConfirmButton: true,
		  showCancelButton: true,
		  confirmButtonText: 'Create',
		  cancelButtonText: 'Cancel',
		}).then(function() {
			$.ajax({
			    url: '/api/categories',
			    method: 'POST',
			    contentType: 'application/json', 
			    processData: false,
			    data: JSON.stringify({
			        name: $('#swal-input1').val(),
			        genre_id : $('#swal-input2').val()
			    }),
			    success: function() {
			        swal(
				      'Success',
				      'Category is added :)',
				      'success'
				    );
				    location.reload();
			    },
			    failure: function(msg) {
			        swal(
				      'Error',
				      msg,
				      'error'
				    );
			    },
			    error: function(xhr, status, text) {
			        swal(
				      'Error',
				      xhr.responseJSON.message,
				      'error'
				    );
			    }
			});  
		}, function(dismiss) {
		  // dismiss can be 'cancel', 'overlay', 'close', 'timer'
		  if (dismiss === 'cancel') {
		    swal(
		      'Cancelled',
		      'You did not add anything :)',
		      'error'
		    );
		  }
		});
    });
    $('.deleteCategory').on('click',function(event){
    	event.preventDefault();
    	var ID = $(this).attr('data-id');
    	swal({
		  title: 'Delete',
		  text:'Do you want to delete this Category?',
		  showConfirmButton: true,
		  showCancelButton: true,
		  confirmButtonText: 'Delete',
		  confirmButtonColor: '#d63032',
		  cancelButtonText: 'Cancel',
		}).then(function() {
			$.ajax({
			    url: '/api/categories',
			    method: 'DELETE',
			    contentType: 'application/json', 
			    processData: false,
			    data: JSON.stringify({
			        id: ID
			    }),
			    success: function() {
			        swal(
				      'Success',
				      'Category is deleted :)',
				      'success'
				    );
				    location.reload();
			    },
			    failure: function(msg) {
			        swal(
				      'Error',
				      msg,
				      'error'
				    );
			    },
			    error: function(xhr, status, text) {
			        console.log(xhr,status,text);
			        swal(
				      'Error',
				      xhr.responseJSON.message,
				      'error'
				    );
			    }
			});  
		}, function(dismiss) {
		  // dismiss can be 'cancel', 'overlay', 'close', 'timer'
		  if (dismiss === 'cancel') {
		    swal(
		      'Cancelled',
		      'You did not delete anything :)',
		      'error'
		    );
		  }
		});
	});
	$('.editCategory').on('click',function(event){
    	event.preventDefault();
    	var ID = $(this).attr('data-id');
    	var genere_id = $(this).attr('data-genere-id')
    	var name = $(this).attr('data-name');
    	genres = JSON.parse($(this).attr('data-geners'));
    	options = '';
    	genres.forEach(function(val){
    		if(val.id == genere_id){
    			options +='<option value="'+val.id+'" selected>'+val.name+'</option>';
    		}else{
    			options +='<option value="'+val.id+'">'+val.name+'</option>';
    		}
    	})
    	swal({
		  title: 'Edit',
		  text: 'Do you want to edit this Genre?',
		  html:'<select id="swal-input2" class="swal2-input">'+options+'</select>' +
		  '<input id="swal-input1" class="swal2-input" value="'+name+'">' ,
		  showConfirmButton: true,
		  showCancelButton: true,
		  confirmButtonText: 'Edit',
		  cancelButtonText: 'Cancel',
		}).then(function() {
			$.ajax({
			    url: '/api/categories/'+ID,
			    method: 'PUT',
			    contentType: 'application/json', 
			    processData: false,
			    data: JSON.stringify({
			        name: $('#swal-input1').val(),
			        genre_id: $('#swal-input2').val()
			    }),
			    success: function() {
			        swal(
				      'Success',
				      'Category is edited :)',
				      'success'
				    );
				    location.reload();
			    },
			    failure: function(msg) {
			        swal(
				      'Error',
				      msg,
				      'error'
				    );
			    },
			    error: function(xhr, status, text) {
			        console.log(xhr,status,text);
			        swal(
				      'Error',
				      xhr.responseJSON.message,
				      'error'
				    );
			    }
			});  
		}, function(dismiss) {
		  // dismiss can be 'cancel', 'overlay', 'close', 'timer'
		  if (dismiss === 'cancel') {
		    swal(
		      'Cancelled',
		      'You did not edit anything :)',
		      'error'
		    );
		  }
		});
	});
	$('.createTopics').on('click',function(event){
    	event.preventDefault();
    	genres = JSON.parse($(this).attr('data-geners'));
    	options = '';
    	genres.forEach(function(val){
    		options +='<option value="'+val.id+'">'+val.name+'</option>';
    	})
    	swal({
		  title: 'Create',
		  text: 'Enter name of the Topic?',
		  html:'<select id="swal-input2" class="swal2-input">'+options+'</select>' +
		  '<input id="swal-input1" class="swal2-input" autofocus>' ,
		  showConfirmButton: true,
		  showCancelButton: true,
		  confirmButtonText: 'Create',
		  cancelButtonText: 'Cancel',
		}).then(function() {
			$.ajax({
			    url: '/api/topics',
			    method: 'POST',
			    contentType: 'application/json', 
			    processData: false,
			    data: JSON.stringify({
			        name: $('#swal-input1').val(),
			        genre_id : $('#swal-input2').val()
			    }),
			    success: function() {
			        swal(
				      'Success',
				      'Topic is added :)',
				      'success'
				    );
				    location.reload();
			    },
			    failure: function(msg) {
			        swal(
				      'Error',
				      msg,
				      'error'
				    );
			    },
			    error: function(xhr, status, text) {
			        swal(
				      'Error',
				      xhr.responseJSON.message,
				      'error'
				    );
			    }
			});  
		}, function(dismiss) {
		  // dismiss can be 'cancel', 'overlay', 'close', 'timer'
		  if (dismiss === 'cancel') {
		    swal(
		      'Cancelled',
		      'You did not add anything :)',
		      'error'
		    );
		  }
		});
    });
    $('.deleteTopic').on('click',function(event){
    	event.preventDefault();
    	var ID = $(this).attr('data-id');
    	swal({
		  title: 'Delete',
		  text:'Do you want to delete this Topic?',
		  showConfirmButton: true,
		  showCancelButton: true,
		  confirmButtonText: 'Delete',
		  confirmButtonColor: '#d63032',
		  cancelButtonText: 'Cancel',
		}).then(function() {
			$.ajax({
			    url: '/api/topics',
			    method: 'DELETE',
			    contentType: 'application/json', 
			    processData: false,
			    data: JSON.stringify({
			        id: ID
			    }),
			    success: function() {
			        swal(
				      'Success',
				      'Topic is deleted :)',
				      'success'
				    );
				    location.reload();
			    },
			    failure: function(msg) {
			        swal(
				      'Error',
				      msg,
				      'error'
				    );
			    },
			    error: function(xhr, status, text) {
			        console.log(xhr,status,text);
			        swal(
				      'Error',
				      xhr.responseJSON.message,
				      'error'
				    );
			    }
			});  
		}, function(dismiss) {
		  // dismiss can be 'cancel', 'overlay', 'close', 'timer'
		  if (dismiss === 'cancel') {
		    swal(
		      'Cancelled',
		      'You did not delete anything :)',
		      'error'
		    );
		  }
		});
	});
	$('.editTopic').on('click',function(event){
    	event.preventDefault();
    	var ID = $(this).attr('data-id');
    	var genere_id = $(this).attr('data-genere-id')
    	var name = $(this).attr('data-name');
    	genres = JSON.parse($(this).attr('data-geners'));
    	options = '';
    	genres.forEach(function(val){
    		if(val.id == genere_id){
    			options +='<option value="'+val.id+'" selected>'+val.name+'</option>';
    		}else{
    			options +='<option value="'+val.id+'">'+val.name+'</option>';
    		}
    	})
    	swal({
		  title: 'Edit',
		  text: 'Do you want to edit this Genre?',
		  html:'<select id="swal-input2" class="swal2-input">'+options+'</select>' +
		  '<input id="swal-input1" class="swal2-input" value="'+name+'">' ,
		  showConfirmButton: true,
		  showCancelButton: true,
		  confirmButtonText: 'Edit',
		  cancelButtonText: 'Cancel',
		}).then(function() {
			$.ajax({
			    url: '/api/topics/'+ID,
			    method: 'PUT',
			    contentType: 'application/json', 
			    processData: false,
			    data: JSON.stringify({
			        name: $('#swal-input1').val(),
			        genre_id: $('#swal-input2').val()
			    }),
			    success: function() {
			        swal(
				      'Success',
				      'Topic is edited :)',
				      'success'
				    );
				    location.reload();
			    },
			    failure: function(msg) {
			        swal(
				      'Error',
				      msg,
				      'error'
				    );
			    },
			    error: function(xhr, status, text) {
			        console.log(xhr,status,text);
			        swal(
				      'Error',
				      xhr.responseJSON.message,
				      'error'
				    );
			    }
			});  
		}, function(dismiss) {
		  // dismiss can be 'cancel', 'overlay', 'close', 'timer'
		  if (dismiss === 'cancel') {
		    swal(
		      'Cancelled',
		      'You did not edit anything :)',
		      'error'
		    );
		  }
		});
	});
});