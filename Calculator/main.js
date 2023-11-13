let displayValue = (value) => {
    document.getElementById("display").value += value;
  };

  let decimal = () => {
    if (!display.includes(".")) {
      document.getElementById("display").value += ".";
    }
  };

  let calulating = () => {
    let display = document.getElementById("display").value;
    try {
      document.getElementById("display").value = eval(display);
    } catch (err) {
      document.getElementById("display").value = "Try again";
    }
  };