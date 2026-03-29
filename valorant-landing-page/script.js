fetch("data.json")
  .then(res => res.json())
  .then(data => {

    const list = document.getElementById("list");

    data.forEach(agent => {

      const li = document.createElement("li");

      li.innerHTML = `
        <div class="card" style="background: linear-gradient(135deg, #${agent.backgroundGradientColors?.[0] || "111"}, #${agent.backgroundGradientColors?.[1] || "333"})">

          <h1>${agent.displayName}</h1>

          <div class="agent-info">
                <div class="agent-icon">
                    <img src="${agent.displayIcon}" alt="${agent.displayName}">
                </div>
                <p>${agent.description}</p>
          </div>

          ${
            agent.role ? `
            <div class="agent-info">
              <div class="agent-class">
                <img class="classe" src="${agent.role.displayIcon}" alt="${agent.role.displayName}">
              </div>
              <p>
                <span>${agent.role.displayName}</span><br/>
                ${agent.role.description}
              </p>
            </div>
            ` : ""
          }

          <p class="abilities">Abilities</p>

          <div class="abilities-grid">
            ${agent.abilities.map((ability, i) => i < 4 ? `
              <div class="abilities-info">
                <div class="agent-class">
                  <img style="width: 60px;" src="${ability.displayIcon || ''}" alt="${ability.displayName}">
                </div>
                <p>
                  <span>${ability.displayName}</span><br/><br/>
                  ${ability.description}
                </p>
              </div>
            `: ``).join("")}
          </div>

          <img class="image-agent" src="${agent.bustPortrait}" alt="${agent.displayName}">
        </div>
      `;

      list.appendChild(li);
    });

  })
  .catch(err => console.error(err));