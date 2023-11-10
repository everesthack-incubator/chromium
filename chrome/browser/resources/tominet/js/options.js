
document.getElementById("save").addEventListener("click", function() {
  let close = document.getElementById("close").value;
  localStorage.setItem('close', close);

  let history = document.getElementById("history").value;
  localStorage.setItem('history', history);
  
  let state = document.getElementById("state").value;
  localStorage.setItem('state', state);
  
  let status = document.getElementById('status');
  status.textContent = 'Options saved!';
  setTimeout(function() { status.textContent = ''; }, 750);
});

function restore_options() {
  let close = localStorage.getItem('close');
  if(!close) close = "yes";
  document.getElementById("close").value = close;

  let history = localStorage.getItem('history');
  if(!history) history = "yes";
  document.getElementById("history").value = history;
  
  let state = localStorage.getItem('state');
  if(!state) state = "maximized";
  document.getElementById("state").value = state;
}

restore_options();
