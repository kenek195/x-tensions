(function ($) {
    var Model_Canned = Backbone.Model.extend({
        initialize: function () {

        },
        defaults: {}
    });

    var Collection_Canned = Backbone.Collection.extend({
        model: Model_Canned,
        localStorage: new Backbone.LocalStorage("m_canned")
    });

    var View_List_Canned = Backbone.View.extend({
        el: '#list-canned',

        model: null,

        initialize: function () {
            this.model = new Collection_Canned();

            this.render();
        },

        template: _.template($('#template-list-canned').html()),

        render: function () {
            this.$el.html(this.template(null));
            return this;
        }
    });

    $(document).ready(function () {
        var list = new View_List_Canned();

        console.log(list);
    });

})(jQuery);