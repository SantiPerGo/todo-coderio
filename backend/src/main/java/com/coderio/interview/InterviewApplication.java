package com.coderio.interview;

import com.coderio.interview.entity.Task;
import com.coderio.interview.repository.TaskRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.core.io.Resource;

import java.util.Arrays;

@SpringBootApplication
public class InterviewApplication {

	public static void main(String[] args) {
		SpringApplication.run(InterviewApplication.class, args);
	}

	@Value("classpath:static/tasks.json")
	Resource tasksJsonFile;

	@Bean
	public CommandLineRunner demo(TaskRepository taskRepository){
		return (args) -> {
			ObjectMapper mapper = new ObjectMapper();
			taskRepository.saveAll(Arrays.asList
				(mapper.readValue(tasksJsonFile.getFile(), Task[].class)));

			for(Task task: taskRepository.findAll())
				System.out.println(task.toString());
		};
	}
}
