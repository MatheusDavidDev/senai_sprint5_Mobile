USE Roman;
GO

INSERT INTO TiposUsuarios (tipo)
VALUES					  ('Professor')
						 ,('Usuario');
GO

INSERT INTO Usuarios (idTipoUsuario, nome, email, senha)
VALUES				 (1, 'Felipe', 'felipe@gmail.com', '123')
					,(1, 'Thiago', 'thiago@gmail.com', '123')
					,(2, 'Laura', 'laura@gmail.com', '123');
GO

INSERT INTO Temas (tema)
VALUES			  ('Gestão')
				 ,('Logistica')
				 ,('HQs')
GO

INSERT INTO Projetos (idTema, idUsuario, titulo)
VALUES				 (1, 1, 'Calculadora de lucros')
					,(2, 1, 'Sistema de uma loja virtual')
					,(3, 2, 'Listar personagens');
GO


