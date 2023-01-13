window.onload = GenerateForm ;



function GenerateForm(){
    let body = document.getElementById('body');


    let form = document.createElement('form');
    body.appendChild(form);

    let legend = document.createElement('legend');
    let legend_data = document.createTextNode('Disco:');
    legend.appendChild(legend_data);
    body.appendChild(legend);

    let br = document.createElement('br');
    body.appendChild(br);

    let name_label = document.createElement('label');
    let name_data = document.createTextNode('Nombre:');
    name_label.setAttribute('for','name');
    name_label.appendChild(name_data);
    body.appendChild(name_label);

    let name = document.createElement('input');
    name.id = 'name';
    name.pattern = '[\S\s]{0,20}';
    body.appendChild(name);
    body.appendChild(br);

    let group_label = document.createElement('label');
    let group_data = document.createTextNode('Grupo:');
    group_label.setAttribute('for','group');
    group_label.appendChild(group_data);
    body.appendChild(group_label);

    let group = document.createElement('input');
    group.id = 'group';
    group.pattern = '[\S\s]{0,20}';
    body.appendChild(group);
    let br2 = document.createElement('br');
    body.appendChild(br2);

    
    let year_label = document.createElement('label');
    let year_data = document.createTextNode('Año:');
    year_label.setAttribute('for','year');
    year_label.appendChild(year_data);
    body.appendChild(year_label);

    let year = document.createElement('input');
    year.id = 'year';
    year.pattern = '[0-9]{4}';
    body.appendChild(year);
    let br3 = document.createElement('br');
    body.appendChild(br3);

    let type_label = document.createElement('label');
    let type_data = document.createTextNode('Tipo:');
    type_label.setAttribute('for','type');
    type_label.appendChild(type_data);
    body.appendChild(type_label);

    let type = document.createElement('input');
    type.id = 'type';
    body.appendChild(type);
    let br4 = document.createElement('br');
    body.appendChild(br4);

    let local_label = document.createElement('label');
    let local_data = document.createTextNode('Local:');
    local_label.setAttribute('for','local');
    local_label.appendChild(local_data);
    body.appendChild(local_label);

    let local = document.createElement('input');
    local.type = 'number';
    local.id = 'local';
    body.appendChild(local);
    let br5 = document.createElement('br');
    body.appendChild(br5);
    
    let lend_label = document.createElement('label');
    let lend_data = document.createTextNode('Prestado:');
    lend_label.setAttribute('for','lend');
    lend_label.appendChild(lend_data);
    body.appendChild(lend_label);

    let lend = document.createElement('input');
    lend.type = 'checkbox';
    lend.id = 'lend';
    body.appendChild(lend);
    let br6 = document.createElement('br');
    body.appendChild(br6);

    let boton1 = document.createElement('input');
    boton1.type = 'submit';
    boton1.id = 'Fin';
    boton1.value = 'Enviar';
    body.appendChild(boton1);

    let boton2 = document.createElement('input');
    boton2.type = 'reset';
    boton2.value = 'Borrar';
    body.appendChild(boton2);

}