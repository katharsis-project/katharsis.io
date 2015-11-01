@JsonApiResource(type = "tasks")
public class Task {

	// ID field

	@JsonApiToMany(lazy = false)
	private List<Project> projects;

	@JsonApiToMany // not shown in Top Level JSON
	private List<Log> logs;

	// fields, getters and setters
}
