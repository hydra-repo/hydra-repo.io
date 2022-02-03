$(function() {
    return $("a.details").each(function(i, el) {
        var $el = $(el);
        return $el.attr("data-bs-toggle", "modal").attr("data-bs-target", "#bibtexModal");
    });
});

$(function() {
    $("#bibtexModal").on("show.bs.modal", function(e) {
        var a = $(e.relatedTarget);
        var link = a.attr('href');
        $(this).find(".modal-body").load(link);
        $(this).find(".modal-title").html(a.prev().find(".pub-title").text());
    });
});

$(function() {
    $("#bibtexModal").on("hidden.bs.modal", function(e) {
        $(this).find(".modal-body").html("");
        $(this).find(".modal-title").html("");
    });
});
