// Calculate MBTI percentages

function calculate() {

    const ie = Number(document.getElementById("ie").value);
    const ns = Number(document.getElementById("ns").value);
    const tf = Number(document.getElementById("tf").value);
    const jp = Number(document.getElementById("jp").value);

    // Calculate percentages
    const i = 100 - ie;
    const e = ie;

    const n = 100 - ns;
    const s = ns;

    const t = 100 - tf;
    const f = tf;

    const j = 100 - jp;
    const p = jp;

    // Show percentages
    document.getElementById("iValue").textContent = `${i}%`;
    document.getElementById("eValue").textContent = `${e}%`;

    document.getElementById("nValue").textContent = `${n}%`;
    document.getElementById("sValue").textContent = `${s}%`;

    document.getElementById("tValue").textContent = `${t}%`;
    document.getElementById("fValue").textContent = `${f}%`;

    document.getElementById("jValue").textContent = `${j}%`;
    document.getElementById("pValue").textContent = `${p}%`;


    ///////////////////////////////
    // DiSC raw scores

    const red = (e + t + j) / 3;
    const yellow = (e + n + f) / 3;
    const green = (i + s + f) / 3;
    const blue = (i + n + t) / 3;

    // Total raw score

    const total = red + yellow + green + blue;

    // Convert to percentages

    const redPercent = (red / total) * 100;
    const yellowPercent = (yellow / total) * 100;
    const greenPercent = (green / total) * 100;
    const bluePercent = (blue / total) * 100;

    // Show DiSC percentages

    document.getElementById("rv").textContent =
        `Red ${redPercent.toFixed(2)}%`;

    document.getElementById("yv").textContent =
        `Yellow ${yellowPercent.toFixed(2)}%`;

    document.getElementById("gv").textContent =
        `Green ${greenPercent.toFixed(2)}%`;

    document.getElementById("bv").textContent =
        `Blue ${bluePercent.toFixed(2)}%`;

    /////////

    // Calculate MBTI type

    // Calculate MBTI type

    let mbti = "";

    mbti += e > i ? "E" : e < i ? "I" : "X";
    mbti += s > n ? "S" : s < n ? "N" : "X";
    mbti += f > t ? "F" : f < t ? "T" : "X";
    mbti += p > j ? "P" : p < j ? "J" : "X";
    
    document.getElementById("result").textContent =
        `Your MBTI Type: ${mbti}`;


}

// Display saved values immediately

calculate();
