Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("\r\n                <h2 class=\"post-title\">\r\n                    Man must explore, and this is exploration at its greatest\r\n                </h2>\r\n                <h3 class=\"post-subtitle\">\r\n                    Problems look mighty small from 150 miles up\r\n                </h3>\r\n                ");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\r\n                <h2 class=\"post-title\">\r\n                    I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.\r\n                </h2>\r\n                ");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("\r\n                <h2 class=\"post-title\">\r\n                    Science has not yet mastered prophecy\r\n                </h2>\r\n                <h3 class=\"post-subtitle\">\r\n                    We predict too much for the next year and yet far too little for the next ten.\r\n                </h3>\r\n                ");
  }

function program7(depth0,data) {
  
  
  data.buffer.push("\r\n                <h2 class=\"post-title\">\r\n                    Failure is not an option\r\n                </h2>\r\n                <h3 class=\"post-subtitle\">\r\n                    Many say exploration is part of our destiny, but it’s actually our duty to future generations.\r\n                </h3>\r\n                ");
  }

  data.buffer.push("<header class=\"intro-header\" style=\"background-image: url('img/home-bg.jpg')\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1\">\r\n                <div class=\"site-heading\">\r\n                    <h1>Clean Blog</h1>\r\n                    <hr class=\"small\">\r\n                    <span class=\"subheading\">A Clean Blog Theme by Start Bootstrap</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</header>\r\n<!-- Main Content -->\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1\">\r\n            <div class=\"post-preview\">\r\n                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "post", options) : helperMissing.call(depth0, "link-to", "post", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                <p class=\"post-meta\">Posted by <a href=\"#\">Start Bootstrap</a> on September 24, 2014</p>\r\n            </div>\r\n            <hr>\r\n            <div class=\"post-preview\">\r\n                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "post", options) : helperMissing.call(depth0, "link-to", "post", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                <p class=\"post-meta\">Posted by <a href=\"#\">Start Bootstrap</a> on September 18, 2014</p>\r\n            </div>\r\n            <hr>\r\n            <div class=\"post-preview\">\r\n                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "post", options) : helperMissing.call(depth0, "link-to", "post", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                <p class=\"post-meta\">Posted by <a href=\"#\">Start Bootstrap</a> on August 24, 2014</p>\r\n            </div>\r\n            <hr>\r\n            <div class=\"post-preview\">\r\n                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "post", options) : helperMissing.call(depth0, "link-to", "post", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                <p class=\"post-meta\">Posted by <a href=\"#\">Start Bootstrap</a> on July 8, 2014</p>\r\n            </div>\r\n            <hr>\r\n            <!-- Pager -->\r\n            <ul class=\"pager\">\r\n                <li class=\"next\">\r\n                    <a href=\"#\">Older Posts &rarr;</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n<hr>");
  return buffer;
  
});