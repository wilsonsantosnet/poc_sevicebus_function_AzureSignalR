using Common.Domain.Base;
using Common.Domain.Model;
using System;

namespace Seed.Domain.Entitys
{
    public class SampleItemBase : DomainBase
    {
        public SampleItemBase()
        {

        }

		public SampleItemBase(int sampleitemid, string value, int sampleid) 
        {
            this.SampleItemId = sampleitemid;
            this.Value = value;
            this.SampleId = sampleid;

        }


		public class SampleItemFactoryBase
        {
            public virtual SampleItem GetDefaultInstanceBase(dynamic data, CurrentUser user)
            {
                var construction = new SampleItem(data.SampleItemId,
                                        data.Value,
                                        data.SampleId);



				construction.SetConfirmBehavior(data.ConfirmBehavior);
				construction.SetAttributeBehavior(data.AttributeBehavior);
        		return construction;
            }

        }

        public virtual int SampleItemId { get; protected set; }
        public virtual string Value { get; protected set; }
        public virtual int SampleId { get; protected set; }



    }
}
