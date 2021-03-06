$(function () {

	$('#tableOrders').DataTable({
		'paging'      : true,
		'lengthChange': true,
		'searching'   : true,
		'ordering'    : true,
		'info'        : true,
		'autoWidth'   : true
	});

    $('.valid-form').validate({
    	rules: {
    		name: {
    			required: true,
    		},
    		email: {
    			required: true,
    			email: true
    		},
    		profile: {
    			required: true,
    		},
    		status: {
    			required: true,
    		},
            cpf: {
                required: true,
            },
            phone: {
                required: true,
            },
            birthdate: {
                required: true,
            },
            sex: {
                required: true,
                messages: false
            }
    	},
    	messages :{
            name: {
                required: "Campo obrigatório",
            },
            email: {
                required: "Campo obrigatório",
            },
            profile: {
                required: "Campo obrigatório",
            },
            status: {
                required: "Campo obrigatório",
            },
            cpf: {
                required: "Campo obrigatório",
            },
            phone: {
                required: "Campo obrigatório",
            },
            birthdate: {
                required: "Campo obrigatório",
            },
            sex: {
                required: "Campo obrigatório",
            }
    	}
    });
  $('.type-form').validate({
        rules: {
            name: {
                required: true,
            }
        },
        messages :{
            name: {
                required: "Campo obrigatório",
            }
        }
    });
    $('.cpf').mask('000.000.000-00');
    $('.fone').mask('(00) 0000-00009');
    $('.date-birth').mask('00/00/00');
    $('.cep').mask('00000-000');
});