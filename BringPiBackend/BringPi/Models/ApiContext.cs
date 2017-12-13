using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BringPi.Models
{
    public class ApiContext : DbContext
    {
        public virtual DbSet<Messages> Messages { get; set; }
        public virtual DbSet<Users> Users { get; set; }

        public ApiContext()
        {
        }

        public ApiContext(DbContextOptions<ApiContext> options) : base(options) { }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Messages>(entity =>
            {
                entity.HasKey(e => e.MessageId);

                entity.Property(e => e.MessageId)
                    .HasMaxLength(450)
                    .IsUnicode(false)
                    .ValueGeneratedNever();

                entity.Property(e => e.OwnerId)
                    .IsRequired()
                    .HasMaxLength(450)
                    .IsUnicode(false);

                entity.HasOne(d => d.OwnerNavigation)
                    .WithMany(p => p.Messages)
                    .HasForeignKey(d => d.OwnerId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Messages_Users");
            });

            modelBuilder.Entity<Users>(entity =>
            {
                entity.Property(e => e.Id)
                    .HasMaxLength(450)
                    .IsUnicode(false)
                    .ValueGeneratedNever();
            });
        }
    }
}
