
package io.katharsis.example.dropwizardSimple.domain.repository;

import com.google.common.collect.Iterables;
import io.katharsis.example.dropwizardSimple.domain.model.Project;
import io.katharsis.repository.annotations.*;
import io.katharsis.queryParams.QueryParams;
import io.katharsis.resource.exception.ResourceNotFoundException;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicLong;
import java.util.stream.Collectors;

@JsonApiResourceRepository(Project.class)
public class ProjectRepository {

    private static final Map<Long, Project> REPOSITORY = new ConcurrentHashMap<>();
    private static final AtomicLong ID_GENERATOR = new AtomicLong(1);

    @JsonApiSave
    public <S extends Project> S save(S entity) {
        if (entity.getId() == null) {
            entity.setId(ID_GENERATOR.getAndIncrement());
        }
        REPOSITORY.put(entity.getId(), entity);
        return entity;
    }

    @JsonApiFindOne
    public Project findOne(Long id) {
        Project project = REPOSITORY.get(id);
        if (project == null) {
            throw new ResourceNotFoundException("Project not found");
        }
        return project;
    }

    @JsonApiFindAll
    public Iterable<Project> findAll(QueryParams queryParams) {
        return REPOSITORY.values();
    }

    @JsonApiFindAllWithIds
    public Iterable<Project> findAll(Iterable<Long> iterable, QueryParams queryParams) {
        return REPOSITORY.entrySet()
                .stream()
                .filter(p -> Iterables.contains(iterable, p.getKey()))
                .collect(Collectors.toMap(Map.Entry::getKey, Map.Entry::getValue))
                .values();
    }

    @JsonApiDelete
    public void delete(Long id) {
        REPOSITORY.remove(id);
    }
}
