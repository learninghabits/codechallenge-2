Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("Start Bootstrap");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Home");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("About");
  }

function program7(depth0,data) {
  
  
  data.buffer.push("Sample Post");
  }

function program9(depth0,data) {
  
  
  data.buffer.push("Contact");
  }

  data.buffer.push("    <!-- Navigation -->\r\n<nav class=\"navbar navbar-default navbar-custom navbar-fixed-top\">\r\n    <div class=\"container-fluid\">\r\n        <!-- Brand and toggle get grouped for better mobile display -->\r\n        <div class=\"navbar-header page-scroll\">\r\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\r\n                <span class=\"sr-only\">Toggle navigation</span>\r\n                Menu <i class=\"fa fa-bars\"></i>\r\n            </button>\r\n            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("navbar-brand")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n        </div>\r\n        <!-- Collect the nav links, forms, and other content for toggling -->\r\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li>\r\n                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                </li>\r\n                <li>\r\n                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "about", options) : helperMissing.call(depth0, "link-to", "about", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                </li>\r\n                <li>\r\n                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "post", options) : helperMissing.call(depth0, "link-to", "post", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                </li>\r\n                <li>\r\n                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "contact", options) : helperMissing.call(depth0, "link-to", "contact", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                </li>\r\n            </ul>\r\n        </div>\r\n        <!-- /.navbar-collapse -->\r\n    </div>\r\n    <!-- /.container -->\r\n</nav>\r\n<!-- Page Header -->\r\n<!-- Set your background image for this header on the line below. -->\r\n");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n<hr />\r\n<!-- Footer -->\r\n<footer>\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1\">\r\n                <ul class=\"list-inline text-center\">\r\n                    <li>\r\n                        <a href=\"#\">\r\n                            <span class=\"fa-stack fa-lg\">\r\n                                <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                                <i class=\"fa fa-twitter fa-stack-1x fa-inverse\"></i>\r\n                            </span>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"#\">\r\n                            <span class=\"fa-stack fa-lg\">\r\n                                <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                                <i class=\"fa fa-facebook fa-stack-1x fa-inverse\"></i>\r\n                            </span>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"#\">\r\n                            <span class=\"fa-stack fa-lg\">\r\n                                <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                                <i class=\"fa fa-github fa-stack-1x fa-inverse\"></i>\r\n                            </span>\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n                <p class=\"copyright text-muted\">Copyright &copy; Your Website 2016</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</footer>");
  return buffer;
  
});