function dig(n) {
    document.form.area.value = document.form.area.value + n
}

function perc() {
    if (document.form.res.value != 'Y') {
        if (document.form.monitor.value && document.form.oper.value && document.form.last.value) {
            document.form.monitor.value = (document.form.last.value / 100) * document.form.monitor.value;
            if (document.form.oper.value == '*' || document.form.oper.value == '/') {
                document.form.res.value = 'Y';
            }
        }
    }
}

/*function calcolaPerc(n) {
    document.form.area.value = document.form.area.value * n/100
    //return ((n) * 100).toFixed(0);
}*/

function ris() {
    var c = document.form.area.value;
    if (c) {
        document.form.area.value = eval(c);
    }
}

function reset() {
    document.form.area.value = '';
}

function cancella() {
    var a = document.form.area.value;
    document.form.area.value = a.substring(0, a.length - 1);
}