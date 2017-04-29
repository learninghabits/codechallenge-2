window.Application = Ember.Application.create({});
Application.Router.map(function () {
    this.resource("index", { path: "/" });
    this.resource("about", { path: "/about" });
    this.resource("post", { path: "/post" });
    this.resource("contact", { path: "/contact" });
});