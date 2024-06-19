var ajaxScriptName = Class.create();
ajaxScriptName.prototype = Object.extendsObject(AbstractAjaxProcessor, {
    doSomething: function () {
        var rec_id = this.getParameter('sysparm_rec');
        
        var rec_gr = new GlideRecord('table_name');
        rec_gr.get(rec_id);
        
        if (rec_gr){
            //run through the GlideRecord
            var json = new JSON();
                var results = {
                    "sys_id": rec_gr.sys_id.toString(),
                    "name": rec_gr.name.toString()
                };
                return json.encode(results);
        }
        
    },
    type: 'ajaxScriptName'
});