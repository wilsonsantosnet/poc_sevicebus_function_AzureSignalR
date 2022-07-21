using System.ComponentModel.DataAnnotations;
using Common.Domain.Base;
using System;

namespace Seed.Dto
{
	public class SampleItemDto  : DtoBase
	{
	
        

        public virtual int SampleItemId {get; set;}

        [Required(ErrorMessage="SampleItem - Campo Value é Obrigatório")]
        [MaxLength(50, ErrorMessage = "SampleItem - Quantidade de caracteres maior que o permitido para o campo Value")]
        public virtual string Value {get; set;}

        

        public virtual int SampleId {get; set;}


		
	}
}
