module.exports = function(model_name,custom,app,models,_) {
  return {
      main: function() {
                var apimodelname = custom.api() + model_name + 's';
                var modelp_name = custom.properCase(model_name);
		app.get(apimodelname, function(req, res) {		
			var query = req.query;
			var where = {};

		       // console.log(where);
			models[modelp_name].findAll({
				where: where
			}).then(function(jsonDatabase) {
			    res.json({ "status":"success","message":"Data selected from database","data": jsonDatabase});
		       
			}, function(e) {
				 res.status(500).send();
			});	
		 
		});
		app.get(apimodelname+'/:id', function(req, res) {
			var todoId = parseInt(req.params.id, 10);
			models[modelp_name].findById(todoId).then(function(todo) {
				if (!!todo) {
					res.json(todo.toJSON());
				} else {
					res.status(404).send();
				}
			}, function(e) {
				res.status(500).send();
			});
		});

		app.post(apimodelname, function(req, res) {
			 
			var body = _.pick(req.body, 'id','sku','name','description','price','mrp','stock','image','packing','status','test');
			 
			models[modelp_name].create(body).then(function(todo) {
				res.json(todo.toJSON());
			}, function(e) {
				console.log("Error: "+ e);
				res.status(400).json(e);
			}); 
		});

		app.delete(apimodelname+'/:id', function(req, res) {
			var todoId = parseInt(req.params.id, 10);
			models[modelp_name].destroy({
				where: {
					id: todoId
				}
			}).then(function(rowsDeleted) {
				if (rowsDeleted === 0) {
					res.status(404).json({
						error: 'No todo with id'
					});
				} else {
					res.status(204).send();
				}
			}, function() {
				res.status(500).send();
			});
		});

		app.put(apimodelname+'/:id', function(req, res) {	
			var todoId = parseInt(req.params.id, 10);
			var body = _.pick(req.body, 'status','name','description','price','stock','packing'); 
			 console.log(body);
		       
			var attributes = {};

			if (body.hasOwnProperty('status')) {
				attributes.status = body.status;
			}
			if (body.hasOwnProperty('name')) {
				attributes.name = body.name;
			}
			if (body.hasOwnProperty('description')) {
				attributes.description = body.description;
			}
		 	if (body.hasOwnProperty('price')) {
				attributes.price = body.price;
			}
			if (body.hasOwnProperty('stock')) {
				attributes.stock = body.stock;
			}
			if (body.hasOwnProperty('packing')) {
				attributes.packing = body.packing;
			}

			models[modelp_name].findById(todoId).then(function(todo) {
				if (todo) {
					todo.update(attributes).then(function(todo) {
						res.json(todo.toJSON());
					}, function(e) {
						res.status(400).json(e);
					});
				} else {
					res.status(404).send();
				}
			}, function() {
				res.status(500).send();
			}); 
		});
         }
  }
}
