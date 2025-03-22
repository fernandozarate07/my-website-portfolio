export default function Project() {
  const project = [
    {
      title: "Proyecto 1",
      description: "Descripción del proyecto 1.",
    },
    {
      title: "Proyecto 2",
      description: "Descripción del proyecto 2.",
    },
  ];

  return (
    <div>
      <h1>Mis Proyectos</h1>
      <ul>
        {project.map((project, index) => (
          <li key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
