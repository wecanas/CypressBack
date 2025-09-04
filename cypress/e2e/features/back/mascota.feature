Feature: Gestión de Mascotas

  Scenario: Crear, buscar, modificar y eliminar una mascota
    Given creo una mascota en la API
    When busco la mascota por ID
    When modifico la mascota
    Then elimino la mascota