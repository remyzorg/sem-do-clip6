




onload = function () {

    var incoming_sessions = document.getElementById('incoming_sessions');
    var past_sessions = document.getElementById('past_sessions');

    sessions_data.forEach(function(session) {
        if (!session.hide) {
            if (session.past) {
                past_sessions.appendChild(session_to_panel(session))
            } else {
                incoming_sessions.appendChild(session_to_panel(session))
            }
        }
    });

}


function session_to_panel (session) {

    var panel = document.createElement('div');
    panel.className="panel panel-info";

    var head = document.createElement('div');
    head.className="panel-heading";
    head.textContent="Session du " + session.date + " - Salle " + session.room;

    var body = document.createElement('div');
    body.className="panel-body";

    session.talks.forEach(function(talk) {

        var talk_body = document.createElement('div');
        talk_body.className="panel panel-default talkbody";

        var title = document.createElement('h4');
        var name = document.createElement('h5');
        var desc = document.createElement('p');

        var desc_div = document.createElement('div');
        var name_div = document.createElement('div');
        var title_div = document.createElement('div');


        title.textContent = talk.title + " (" + talk.duration + "min)";
        name.textContent = talk.name;
        desc.textContent = talk.description;

        title_div.appendChild(title);
        name_div.appendChild(name);
        desc_div.appendChild(desc);


        talk_body.appendChild(title_div)
        talk_body.appendChild(name_div)
        talk_body.appendChild(desc_div)
        body.appendChild(talk_body);

    });


    panel.appendChild(head);
    panel.appendChild(body);

    return panel;
}

