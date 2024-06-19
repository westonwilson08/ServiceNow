function onClick(g_form) {
    var ga = new GlideAjax('scriptIncludeName');
    ga.addParam('sysparm_name', 'functionName');
    ga.addParam('sysparm_rec', g_form.getUniqueValue());
    ga.getXML(performAction);
}

function performAction(response) {
    var answer = response.responseXML.documentElement.getAttribute("answer");
    if (answer) {
        g_form.setValue("field", answer.sys_id, answer.name);
    } else {
        alert('Encountered an error')
    }
}